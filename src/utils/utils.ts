
import { ethers } from 'ethers';
import { MetaMaskInpageProvider } from "@metamask/providers";
import Test from '../Test.json';

export const contractAddress = '0xad817DF7E076e1c10598b953dEF5c4c13ADBfe2a';

export const getContract = (ethereum: MetaMaskInpageProvider) => {
  const provider = new ethers.providers.Web3Provider(ethereum as any);
  const signer = provider.getSigner();
  const connectedContract: ethers.Contract = new ethers.Contract(contractAddress, Test.abi, signer);
  return connectedContract;
}
