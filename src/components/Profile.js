import { contract, provider } from "../utils/Constants";
import { useState } from "react";
import { ethers } from "ethers";

export const Profile = () => {
	const [UserBalance, setUserBalance] = useState(0);
	const [WithdrawBalanceStatus, setWithdrawBalanceStatus] = useState("");

	const withdrawAmountStatus = async () => {
		const withdrawalStatus = await contract.availableToWithdraw();
		const amount = ethers.utils.formatEther(withdrawalStatus);
		setWithdrawBalanceStatus(amount);
	};

	const balance = async () => {
		const account = await window.ethereum.request({ method: "eth_requestAccounts" });
		const balance = await provider.getBalance(account[0]);
		setUserBalance(ethers.utils.formatEther(balance));
	};

	const withdraw = async () => {
		try {
			await contract.withdraw();
			console.log("Transfer successfully");
		} catch (error) {
			alert(`Error Message: Something went wrong`);
		}
	};

	return (
		<div className="h-56 grid grid-cols-3 gap-4 content-center ...">
			<div>
				<button onClick={balance} className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full">
					Check balance
				</button>
				<p>{UserBalance} Ether</p>
			</div>
			<div>
				<button
					onClick={withdrawAmountStatus}
					className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
				>
					Check Withdraw Amount status
				</button>
				<p>{WithdrawBalanceStatus} Ether</p>
			</div>
			<div>
				<button
					onClick={withdraw}
					className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full"
				>
					Withdraw
				</button>
			</div>
		</div>
	);
};
