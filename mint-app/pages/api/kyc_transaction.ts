import { MongoClient } from 'mongodb';
import { getSession } from 'next-auth/react';

export default async (req, res) => {
  const {
    user: { email },
  } = await getSession({ req });

  const {
    request: { from: address },
  } = req.body;

  if (!email || !address) {
    return res.send(
      JSON.stringify({
        success: false,
        error: 'Not authenticated',
      }),
    );
  }

  const client = await MongoClient.connect(process.env.DATABASE_URL);
  const db = client.db();
  const user = await db.collection('users').findOne({ email });

  if (user) {
    return res.send(
      JSON.stringify({
        success: false,
        error: 'Already registered',
      }),
    );
  }

  const result = await fetch(process.env.AUTOTASK_URL, {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((outerJson) => JSON.parse(outerJson.result));

  console.warn(result);
  if (result?.txHash) {
    await db.collection('users').insertOne({ email, address });

    return res.send(
      JSON.stringify({
        success: true,
        txHash: result?.hash,
      }),
    );
  }

  return res.send(
    JSON.stringify({
      success: false,
      error: 'Transaction error',
    }),
  );
};
