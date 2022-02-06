import { StableBond, LPBond, NetworkID, CustomBond, BondType } from "src/lib/Bond";
// import { addresses } from "src/constants";
import { ReactComponent as DaiImg } from "src/assets/tokens/DAI.svg";
import { ReactComponent as NovaDaiImg } from "src/assets/tokens/Nova-DAI.svg";
import { ReactComponent as NovaBUSDImg } from "src/assets/tokens/Nova-BUSD.svg";
import { ReactComponent as BusdImg } from "src/assets/tokens/BUSD.svg";
import { ReactComponent as NovaBNBImg } from "src/assets/tokens/Nova-BNB.svg";
import { abi as BNBNovaBondContract } from "src/abi/bonds/BondContract.json";
import { abi as BondNovaDaiContract } from "src/abi/bonds/BondContract.json";
import { abi as BondNovaBUSDContract } from "src/abi/bonds/BondContract.json";
import { abi as DaiBondContract } from "src/abi/bonds/BondContract.json";
import { abi as BusdBondContract } from "src/abi/bonds/BondContract.json";
import { abi as ReserveNovaBNBContract } from "src/abi/reserves/ReserveLPContract.json";
import { abi as ReserveNovaDaiContract } from "src/abi/reserves/ReserveLPContract.json";
import { abi as ReserveNovaBUSDContract } from "src/abi/reserves/ReserveLPContract.json";
// import { abi as ierc20Abi } from "src/abi/IERC20.json";
// import { getBondCalculator } from "src/helpers/BondCalculator";

// TODO(zx): Further modularize by splitting up reserveAssets into vendor token definitions
//   and include that in the definition of a bond
export const dai = new StableBond({
  name: "dai",
  displayName: "DAI",
  bondToken: "DAI",
  bondIconSvg: DaiImg,
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x2a8D268894F853ee11b29d7A537E61F109154CC7",
      reserveAddress: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
  },
});

export const busd = new StableBond({
  name: "busd",
  displayName: "BUSD",
  bondToken: "BUSD",
  bondIconSvg: BusdImg,
  bondContractABI: BusdBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x359F6Aa49C0431f22539032a5781258F30228DE8",
      reserveAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
  },
});

export const nova_bnb = new LPBond({
  name: "nova_bnb_lp",
  displayName: "Nova-BNB LP",
  bondToken: "BNB",
  bondIconSvg: NovaBNBImg,
  bondContractABI: BNBNovaBondContract,
  reserveContract: ReserveNovaBNBContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0eeed0bC54B5868D95A5432C63694F418BBafeC5",
      reserveAddress: "0x01f7087F922d805B5f83eCfbD3E6fea7A1c5E0a1",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x7BB53Ef5088AEF2Bb073D9C01DCa3a1D484FD1d2",
      reserveAddress: "0x11BE404d7853BDE29A3e73237c952EcDCbBA031E",
    },
  },
  lpUrl:
    "https://pancakeswap.finance/add/0x76c3CaD66E707Ad7076Af2872C1e2F811e58818e/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
});

export const nova_dai = new LPBond({
  name: "Nova_dai_lp",
  displayName: "Nova-DAI LP",
  bondToken: "DAI",
  bondIconSvg: NovaDaiImg,
  bondContractABI: BondNovaDaiContract,
  reserveContract: ReserveNovaDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xac31094C8e128c989DBCbE0B1E1b24e16b340b7f",
      reserveAddress: "0xA841dFF7AFfaF92EDFaA706472b84B8718030560",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://pancakeswap.finance/add/0x76c3CaD66E707Ad7076Af2872C1e2F811e58818e/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
});

export const nova_busd = new LPBond({
  name: "nova_busd_lp",
  displayName: "Nova-BUSD LP",
  bondToken: "BUSD",
  bondIconSvg: NovaBUSDImg,
  bondContractABI: BondNovaBUSDContract,
  reserveContract: ReserveNovaBUSDContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xF82Ae823Fb863De79258D7D82bfAC75752e660c8",
      reserveAddress: "0x2EE6838bf652f3179fF0f2d1D2aA23808aBbBb39",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://pancakeswap.finance/add/0x76c3CaD66E707Ad7076Af2872C1e2F811e58818e/0xe9e7cea3dedca5984780bafc599bd69add087d56",
});

// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
export const allBonds = [dai, busd, nova_bnb, nova_dai, nova_busd];
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
// console.log(allBondsMap);
export default allBonds;
