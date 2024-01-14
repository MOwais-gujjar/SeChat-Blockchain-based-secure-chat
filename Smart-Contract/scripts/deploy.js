const main = async () => {
  const Sechat = await hre.ethers.getContractFactory("Sechat")
  const sechat = await Transaction.deploy();
  await sechat.deployed();

  console.log("Transaction Deployed", sechat.address)
  }

const runTime = async () => {

  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

runTime();
