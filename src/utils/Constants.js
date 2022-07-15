import abi from "./LazyNFT.json";
import { ethers } from "ethers";

export const Abi = abi.abi;
const contractAddress = "0x36b1A0bb9A071289E7743B164765A6aEE695F636";
export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
// export const url = "https://nameless-headland-03040.herokuapp.com/lazyApi/";
export const url = "http://localhost:5000/lazyApi/";

export const contract = new ethers.Contract(contractAddress, Abi, signer);
