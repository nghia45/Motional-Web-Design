const hre = require("hardhat");

async function main() {
    const Message = await hre.ethers.getContractFactory("Message");
    const message = await Message.deploy();

    await message.deployed();

    console.log("MessageModule deployed to:", message.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});