// SPDX-License-Identifier: AGPL-1.0

pragma solidity >=0.8.0;

library Constants {
    // How long does an eligible buyer have to purchase
    uint256 internal constant WINDOW = 10 minutes;
    // How many addresses are eligible to purchase per window
    uint256 internal constant WINDOW_PARTICIPANTS = 5;

    // How many NFTs in entire drop?
    uint256 internal constant MAX_TOKEN_COUNT = 5;
}
