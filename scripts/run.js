const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Gaara", "Naruto", "Sasuke"],       // Names
      ["https://imgur.com/3wKJLD0.png", // Images
      "https://imgur.com/UYMUy3Z.png", 
      "https://i.imgur.com/WMB6g9u.png"],
      [300, 200, 250],                    // HP values
      [45, 100, 75]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();