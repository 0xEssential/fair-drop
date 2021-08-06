import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

import { NFTStorage, File } from "nft.storage";

async function main() {
  const storage = new NFTStorage({ token: process.env.NFT_STORAGE_KEY });

  const directory = [];

  for (const id of Array.from(Array(5).keys())) {
    const fileData = fs.readFileSync(path.join(__dirname, `../assets/${id + 1}.png`))
    const imageFile = new File([fileData], `FairDrop-${id + 1}.png`, { type: 'image/png'});
    const image = await storage.storeBlob(imageFile);

    const metadata = {
      name: "Drop em Fair",
      description: "OG Wrasslers Howler Dawes and Infinity Rush want you to drop your NFTs fairly. Or else they will kick your ass",
      image: `ipfs://${image}`,
      properties: {
        Edition: id + 1,
        Of: 5,
        Artist: 'James Blagden'
      }
    }

    directory.push(
      new File([JSON.stringify(metadata, null, 2)], `${id}.json`)
    )
  }

  const pinnedDir = await storage.storeDirectory(directory);
  console.warn(pinnedDir)

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
