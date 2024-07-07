//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract EthNft is Initializable, ERC721Upgradeable, OwnableUpgradeable {
    uint256 private _tokenIdCounter;

    mapping (uint256 => string) private _tokenURIs;

    constructor(){
    }

    function initialize(address owner) external initializer {
        __ERC721_init("EthNft", "ENFT");
        __Ownable_init(owner);
        _tokenIdCounter = 1;
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory){
        string memory _tokenURI = _tokenURIs[tokenId];
        return _tokenURI;
    }

    function mint(address recipient, string memory uri) public {
        _safeMint(recipient, _tokenIdCounter);
        _setTokenURI(_tokenIdCounter, uri);
        _tokenIdCounter++;
    }
}
