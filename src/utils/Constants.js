import abi from "./LazyNFT.json";
import { ethers } from "ethers";

const Abi = abi.abi;
// const contractAddress = "0x1109773fF2BC6F8075fbbB78970E6a6BcaFd2E86";
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

export const contract = new ethers.Contract(contractAddress, Abi, signer);
