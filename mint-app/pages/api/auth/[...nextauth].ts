import { utils } from 'ethers';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const ADMINS = [
  utils.getAddress('0x4DB119936A4141b63e12446C6349880D19560690'), // shawn
  utils.getAddress('0x0090720FeD7Fed66eD658118b7B3BB0189D3A495'), // sam
  utils.getAddress('0x67364ad8F3128A514dAC47032Aa4fbA3C5E65495'), // jonny
];

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'ethereum',
      credentials: {
        address: {
          type: 'text',
        },
        signedMessage: {
          label: 'SignedMessage',
          type: 'text',
        },
        nonce: { label: 'Nonce', type: 'text' },
      },
      async authorize(credentials, _req) {
        const address = utils.getAddress(
          utils.verifyMessage('LOGIN', (credentials as any).signedMessage),
        );
        // If no error and we have user data, return it
        if (ADMINS.includes(address)) {
          return { name: address };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
});
