import { useState } from "react";

export const Navbar = () => {
	const [CurrentAccount, setCurrentAccount] = useState("");

	const walletConnect = async () => {
		if (!window.ethereum) {
			return alert("please install metamask");
		}
		const addr = await window.ethereum.request({ method: "eth_requestAccounts" });
		setCurrentAccount(addr[0]);
	};

	return (
		<nav className="bg-gray-700 shadow-lg">
			<div className="container mx-auto">
				<div className="sm:flex justify-around">
					<a href="/" className="text-white text-3xl font-bold p-3">
						Home
					</a>

					<ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
						<li className="sm:inline-block">
							<a href="/create" className="p-3 hover:text-white">
								Create Voucher
							</a>
						</li>
						<li className="sm:inline-block">
							<a href="/profile" className="p-3 hover:text-white">
								Profile
							</a>
						</li>
						<li className="sm:inline-block">
							{!CurrentAccount ? (
								<button onClick={walletConnect} className="p-3 hover:text-white">
									Sign In
								</button>
							) : (
								<p>{CurrentAccount}</p>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
