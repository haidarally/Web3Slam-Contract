const { ethers } = require("hardhat");

const main = async () => {
  const MyNFT = await ethers.getContractFactory("DataContract");
  const myNFT = await MyNFT.deploy();
  await myNFT.deployed();
  console.log("Contract deployed to address:", myNFT.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
