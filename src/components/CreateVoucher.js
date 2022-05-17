import { useState } from "react";
import { ethers } from "ethers";
import { contract, provider } from "../utils/Constants";
import { LazyMinter } from "../utils/Voucher";

export const CreateVoucher = () => {
	const [UserBalance, setUserBalance] = useState("");
	const [ID, setID] = useState(0);
	const [URI, setURI] = useState("");
	const [Minprice, setMinprice] = useState(0);
	const [Data, setData] = useState("");

	const balance = async () => {
		const account = await window.ethereum.request({ method: "eth_requestAccounts" });
		const balance = await provider.getBalance(account[0]);
		setUserBalance(ethers.utils.formatEther(balance));
	};

	const handleIdOwner = async (e) => {
		if (typeof e.target.value === String) {
			e.preventDefault();
		}
		setID(e.target.value);
	};

	const handleURI = async (e) => {
		setURI(e.target.value);
	};

	const handleMinprice = async (e) => {
		if (typeof e.target.value === String) {
			e.preventDefault();
		}
		setMinprice(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const signer = provider.getSigner();

		const lazyMinter = new LazyMinter({ contract, signer });
		const voucher = await lazyMinter.createVoucher(ID, URI, Minprice);

		console.log(voucher);

		return fetch("http://localhost:8000/lazyApi/create", {
			method: "POST",
			body: JSON.stringify(voucher),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.text())
			.then((data) => setData(data));
	};

	return (
		<div className="grid">
			<div className="grid-cols-1 gap-4 mt-4 ml-6 mr-6">
				<div className="p-6 rounded-lg shadow-lg bg-gray-300	 max-w-md">
					<p>
						Balance of connected user:<strong>{UserBalance}</strong> Ether
					</p>
					<button className="bg-gray-700" onClick={balance}>
						Check Balance
					</button>
				</div>
			</div>
			{/* ====Create voucher form */}
			<div className="grid-cols-1 gap-4 mt-4 ml-6 mr-6">
				<div className="flex-auto  p-6 rounded-lg shadow-lg bg-gray-300	 max-w-md">
					<h3>Create NFT Voucher</h3>
					<form onSubmit={handleSubmit}>
						<div className="form-group mb-6">
							<div>
								<label htmlFor="TokenID" className="form-label inline-block mb-2 text-black		-700">
									TokenID:
									<input
										className=" bg-white  border border-solid"
										type="number"
										min="0"
										value={ID}
										onChange={handleIdOwner}
									/>
								</label>
							</div>
							<div className="mt-3">
								<label>
									URI:
									<input type="text" value={URI} onChange={handleURI} />
								</label>
							</div>
							<div className="mt-3">
								<label>
									Minimum Price:
									<input type="number" min="0" value={Minprice} onChange={handleMinprice} />
								</label>
							</div>
							<input className=" mt-3 bg-gray-500" type="submit" value="Submit" />
						</div>
					</form>
					<p>{Data}</p>
				</div>
			</div>
		</div>
	);
};
