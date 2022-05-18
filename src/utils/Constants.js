import abi from "./LazyNFT.json";
import { ethers } from "ethers";

export const Abi = abi.abi;
const contractAddress = "0xb258E0301A63b0DCCaaD1e2D60D941fbFD3A321E";
export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const url = "https://nameless-headland-03040.herokuapp.com/lazyApi/";
// export const url = "http://localhost:5000/lazyApi/";

export const contract = new ethers.Contract(contractAddress, Abi, signer);
