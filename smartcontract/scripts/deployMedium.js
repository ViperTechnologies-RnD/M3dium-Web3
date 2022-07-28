
const hre = require("hardhat");

async function main() {
  
  // We get the contract to deploy
  const Medium = await hre.ethers.getContractFactory("Medium");
  const medium = await Medium.deploy(
    "Medium Web3 Blog",
    "MW3BLOG",
    "1000000000000000000" // 1 Matic
  );

  await medium.deployed();

  console.log("Medium deployed to:", medium.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
