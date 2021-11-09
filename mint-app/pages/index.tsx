import React from 'react';

export default function Home() {
  return (
    <div className="article">
      <p>
        At{' '}
        <a href="https://0xessential.com" target="_blank" rel="noreferrer">
          0xEssential
        </a>{' '}
        we&apos;ve been learning from other NFT collectible drops to determine
        the best way to release our collection{' '}
        <a href="https://wrasslers.com" target="_blank" rel="noreferrer">
          Wrasslers
        </a>
        . We appreciate that projects like{' '}
        <a href="https://artblocks.io/" target="_blank" rel="noreferrer">
          ArtBlocks
        </a>{' '}
        and{' '}
        <a href="https://www.parallel.life/" target="_blank" rel="noreferrer">
          Parallel
        </a>{' '}
        are exploring different models to reduce the gas wars that happen on
        popular drops, and have been impressed by projects like{' '}
        <a href="https://forgettenrunes.com/" target="_blank" rel="noreferrer">
          Forgotten Runes Wizard&apos;s Cult
        </a>{' '}
        who used and{' '}
        <a
          href="https://twitter.com/cryppadotta/status/1420372022790483979"
          target="_blank"
          rel="noreferrer"
        >
          shared some best practices
        </a>
        . Paradigm has written an excellent guide on{' '}
        <a
          href="https://www.paradigm.xyz/2021/10/a-guide-to-designing-effective-nft-launches/"
          target="_blank"
          rel="noreferrer"
        >
          Designing Effective NFT Launches
        </a>{' '}
        that offers solutions for fairer launches all the way through metadata
        reveal. We think we can add something to the conversation by offering
        this idea and reference implementation to the community.
      </p>
      <p>
        0xEssential builds developer tools for the borderless metaverse. We help
        NFT projects and metaverse developers work together to create positive
        sum outcomes. Our Solidity SDK offers inheritable contracts that provide
        metaverse capability - standards for types of objects that game and
        metaverse developers can use to integrate items users already own. We
        also offer other tooling and resources, like our guide on trustless
        metadata reveals and our MetaTransaction Middleware approach for
        building cross-chain games. FairDrop is another tool we hope you&apos;ll
        consider using to realize a more efficient and open approach to NFTs in
        the metaverse.
      </p>
      <p>
        Our ideal NFT drop is average user first - no FOMO or failed
        transactions, fewer bots. No drama, no whales minting 30% of supply, for
        better or worse. These are the key aspects of a <em>FairDrop</em>:
      </p>
      <ul>
        <li>
          <strong>Efficient</strong> - no more gas wars, and no performance
          issues related to pageloads.
        </li>
        <li>
          <strong>Timezone agnostic</strong> - crypto is global, and timed drops
          inevitably put someone at a disadvantage, while launch dates are too
          frequently missed.
        </li>
        <li>
          <strong>Distributed randomly</strong> - being the quickest to click
          and pumping gas is not the best way to decide who gets an NFT.
        </li>
        <li>
          <strong>Decentralized and Trustless</strong> - we should not be asking
          users to register with email, or using a centralized database and
          webserver to manage who can buy what.
        </li>
      </ul>

      <p>
        We took all of those requirements and built a system that uses raffles
        with a <em>right to buy</em> reward. Random winners get to mint NFTs at
        a fair floor price, wherever they are in the world, whether they&apos;re
        influencers, etherscan minters, bot makers, or MEV manipulators.
        <br />
      </p>
      <hr />
      <h2> 1. Register</h2>
      <h3>Address registers for drop on-chain</h3>
      <p>
        A user can register their interest in an NFT drop in a decentralized
        way. We use Polygon for registration to keep things cheap. A project can
        launch their list before release to build and gauge interest, while
        users know they have a fair chance to mint. An NFT developer can choose
        any number of approaches for registration - we provide some examples for
        using a metatransaction for registration, allowing the project to
        implement some KYC to be more Sybil-resistant.
      </p>

      <h2>2. Raffle</h2>
      <h3>Totally fair random selection</h3>
      <p>
        Once a project is ready for launch we use Chainlink VRF to select a
        random list of eligible minters. These addresses can each mint{' '}
        <em>n</em> tokens, where <em>n x minters</em> is equal to available
        tokens. Each eligible user can perform an L2 transaction to be
        checkpointed on L1 by the Polygon CheckpointManager contract. The user
        can then generate a proof in a dApp and submit the proof as a &quot;mint
        pass&quot; to the L1 contract.
      </p>

      <h2>3. Redeem</h2>
      <h3>Chilled out and cheap mints</h3>
      <p>
        Eligible minting addresses have 24 hours to mint their tokens. They mint
        on Ethereum mainnet without the need for gas wars or staying up all
        night to catch a drop. The minting flow takes a little bit of time as
        the user must wait for their claim transaction to be checkpointed on L1.
      </p>

      <h2>4. Repeat</h2>
      <h3></h3>
      <p>
        After 24 hours a new batch of eligible minters is selected for minting.
        Previous minters become ineligible and we select a new set of minters
        relative to remaining tokens.
      </p>
      <hr />

      <p>
        While there are certainly potential pitfalls and improvements to the
        implementation of this approach, we think these mechanics would be a
        huge win for NFT collectors without adding much of a burden to project
        developers. Note that this was hacked together quickly, and while we are
        testing it in production, this code is not audited or battle-tested at
        all.
      </p>
      <p>
        One issue with this approach is that it does not prevent bots from
        signing up thousands of addresses. Since registration is cheap in tx
        cost and onchain, there is not a great way to prevent this. We could
        require at least a small payment for registration, which might help, but
        adds complexity and might not be accepted by users. It is true that the
        bot owner would need to check each of their registered addresses for
        eligibility, and purchase through eligible addresses, but this can be
        done pretty easily too, and captchas or other web-based tools of course
        cannot prevent interacting with the contracts directly. In some ways we
        are forced to choose between decentralization and fairness. Parallel
        used email registration with a centralized server - this makes it a lot
        easier to prevent bots, but also introduces trust and the potential of
        censorship. We do offer one approach where registration is still
        on-chain, but performed in a meta-transaction on behalf of an address
        after some KYC.
      </p>
      <p>
        We don&apos;t have all of the answers but hope to kick off a
        conversation with the community! Thanks for reading, PRs welcome, and
        let us know your thoughts?
      </p>
      <hr />
      <iframe
        src="https://theconvo.space/embed/dt?url=https%3A%2F%2Ffairdrop.0xessential.com%2F&threadId=fairdrop-discussion&theme=light"
        width="100%"
        style={{ border: 'none', margin: '24px 0', minHeight: 400 }}
      >
        Comments
      </iframe>
    </div>
  );
}
