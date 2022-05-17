import abi from "./LazyNFT.json";
import { ethers } from "ethers";

export const Abi = abi.abi;
// const contractAddress = "0x1109773fF2BC6F8075fbbB78970E6a6BcaFd2E86";
export const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const url = "http://localhost:5000/lazyApi/";

export const contract = new ethers.Contract(contractAddress, Abi, signer);
