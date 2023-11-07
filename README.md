
# CrowdFunding dApp

This is a decentralized crowdfunding application with NextJS and Solidity. In this dapp peoples can create campaigns or donate to them.



## :hammer_and_wrench: Built With

- [Solidity](https://soliditylang.org/) - Smart Contract Language
- [React](https://reactjs.org/) - JavaScript library for UI
- [NextJS](https://nextjs.org/) - React Framework
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [Hardhat](https://hardhat.org/) Ethereum Development Environment
- [Waffle](https://ethereum-waffle.readthedocs.io/en/latest/) Smart Contract Test Library
- [Ethers](https://docs.ethers.org/v5/) Smart Contract Interaction Library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon Library


## :triangular_flag_on_post: Getting Started

First of all you need to clone the repository and install the dependencies

```shell

git clone [link]
cd client
npm install
cd ..
cd smart-contract
npm install

```

After doing this you must assign the following environment variables

```shell

--- CLIENT ---
NEXT_PUBLIC_API_BASE_URL
NEXT_PUBLIC_PROVIDER_URL
NEXT_PUBLIC_CONTRACT_ADDRESS
NEXT_PUBLIC_PRIVATE_KEY

--- SMART CONTRACT ---
ACCOUNT_PRIVATE_KEY
PROJECT_ID

```

And deploy your smart contract then run your client

```shell

--- SMART CONTRACT ---
npx hardhat run scripts/deploy.js

--- CLIENT ---
npm run dev

```
