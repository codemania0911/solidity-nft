// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CZodiacNFT is ERC721Enumerable, Ownable {
    mapping(uint256 => string) public tokenURIs;
    mapping(uint256 => uint256) public zodiacIds;
    mapping(address => bool) public minters;

    constructor() ERC721("CZodiacNFT", "CZodiac") {}

    modifier onlyMinter() {
        require(minters[msg.sender], "not minter");
        _;
    }

    function mint(string memory tokenURI_, uint256 zodiacId)
        external
        onlyMinter
    {
        uint256 mintNumber = totalSupply();
        tokenURIs[mintNumber] = tokenURI_;
        zodiacIds[mintNumber] = zodiacId;
        _mint(msg.sender, mintNumber);
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        return tokenURIs[tokenId];
    }

    function addMinter(address minter) external onlyOwner {
        minters[minter] = true;
    }

    function removeMinter(address minter) external onlyOwner {
        minters[minter] = false;
    }
}
