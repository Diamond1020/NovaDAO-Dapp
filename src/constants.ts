export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-graph";
export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  56: {
    DAI_ADDRESS: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3", // duplicate
    USDC_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    BUSD_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    HEC_ADDRESS: "0x76c3CaD66E707Ad7076Af2872C1e2F811e58818e",
    STAKING_ADDRESS: "0x45148C1719Dc65a1Ca2E2C54b53691f51efFa8C9", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x378D354a0f978d9ad003e2EB589c94c18E388a65", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x9ae7972BA46933B3B20aaE7Acbf6C311847aCA40",
    OLD_STAKING_HELPER_ADDRESS: "0x2ca8913173D36021dC56922b5db8C428C3fdb146",
    SHEC_ADDRESS: "0x95786087528c1bA72E3D3ab5a23e547AAf762027",
    OLD_SHEC_ADDRESS: "0x36F26880C6406b967bDb9901CDe43ABC9D53f106",
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
    DISTRIBUTOR_ADDRESS: "0x8A1EeC48D48eADFf2f6e1f0881165A2F2dE502F7",
    BONDINGCALC_ADDRESS: "0x1AF9e162EdA1E34d8c767CC520a21c2525125bA1",
    TREASURY_ADDRESS: "0x26B1c19046Fa9e06fECAD89a5a1461e644bB4563",
    REDEEM_HELPER_ADDRESS: "0x3F622dd43708653B0bd460F3Ed4ECd2fc25a1ee3",
    PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", // NEW
  },
};
