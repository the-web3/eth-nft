const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("EthNft", function () {
  async function deployEthNftFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const ethNFT = await ethers.getContractFactory("EthNft");
    const eth_nft = await ethNFT.deploy(ethNFT);
    return { eth_nft, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Mint NFT", async function () {
      const { eth_nft, owner } = await loadFixture(deployEthNftFixture);
      await eth_nft.mint(owner, "ipfs://QmecKFh9YamJpS6VmntCpZm65oKtv7WHu7tEwsCquYSrSD")
      expect(await eth_nft.tokenURI(0)).to.equal("ipfs://QmecKFh9YamJpS6VmntCpZm65oKtv7WHu7tEwsCquYSrSD");
    });
  });
});

