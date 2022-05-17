import abi from "./LazyNFT.json";
import { ethers } from "ethers";

export const Abi = abi.abi;
const contractAddress = "0x1109773fF2BC6F8075fbbB78970E6a6BcaFd2E86";
export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const url = "https://nameless-headland-03040.herokuapp.com/lazyApi/";

export const contract = new ethers.Contract(contractAddress, Abi, signer);
