// const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying Sechat contract with the account:", deployer.address);

  const Sechat = await ethers.getContractFactory("Sechat");
  const sechat = await Sechat.deploy();

  console.log("Sechat deployed to:", sechat.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
