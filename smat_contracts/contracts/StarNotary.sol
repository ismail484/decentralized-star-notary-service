pragma solidity ^0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

contract StarNotary is ERC721 { 

    struct Star { 
        string name; 
        string story;
        string ra;
        string dec;
        string mag;
    }

    mapping(bytes32 => uint256) public myStars;


    mapping(uint256 => Star) public tokenIdToStarInfo; 
    mapping(uint256 => uint256) public starsForSale;
    mapping(bytes32 => bool) public myStarsHashMap;


    

    function createStar(string _name, string _story, string _ra, string _dec, string _mag, uint256 _tokenId) public { 
        

        //check if tokenId already exists
        require(keccak256(abi.encodePacked(tokenIdToStarInfo[_tokenId].ra)) == keccak256(""));
        require(keccak256(abi.encodePacked(tokenIdToStarInfo[_tokenId].dec)) == keccak256(""));
        require(keccak256(abi.encodePacked(tokenIdToStarInfo[_tokenId].mag)) == keccak256(""));

    
        //check new star data inputs if already exists 
        require(keccak256(abi.encodePacked(_ra)) != keccak256(""));
        require(keccak256(abi.encodePacked(_dec)) != keccak256(""));
        require(keccak256(abi.encodePacked(_mag)) != keccak256(""));
        require(_tokenId != 0);
    
        //check star existence
        require(!checkIfStarExist(_ra, _dec, _mag));




        Star memory newStar = Star(_name, _story, _ra, _dec, _mag);
        tokenIdToStarInfo[_tokenId] = newStar;
        bytes32 hash = convertToStarHash(_ra, _dec, _mag);
        myStarsHashMap[hash] = true;

       
        _mint(msg.sender, _tokenId);
    }


    function putStarUpForSale(uint256 _tokenId, uint256 _price) public {
        
        //check if  the owner of tokenId is who  initially deployed the contract, the owner of the contract. 
        require(this.ownerOf(_tokenId) == msg.sender);

        starsForSale[_tokenId] = _price;
    }


    function buyStar(uint256 _tokenId) public payable { 
        
        // Verify if the star is for sale
        require(starsForSale[_tokenId] > 0);
        
        uint256 starPrice = starsForSale[_tokenId];
        address starOwner = this.ownerOf(_tokenId);
        
        // Verify you have amount
        require(msg.value >= starPrice);

        _removeTokenFrom(starOwner, _tokenId);
        _addTokenTo(msg.sender, _tokenId);
        
        
        starOwner.transfer(starPrice);

        // If everything is okay transfer
        if(msg.value > starPrice) { 
            msg.sender.transfer(msg.value - starPrice);
        }
    }



    function checkIfStarExist(string _ra, string _dec, string _mag) public view returns (bool){
        bytes32 hash=convertToStarHash(_ra, _dec, _mag);
        return myStarsHashMap[hash];
    }

    function convertToStarHash(string _ra, string _dec, string _mag) public pure returns(bytes32) {
        return keccak256(abi.encodePacked(_ra, _dec, _mag));
    }

    function mint(uint256 _tokenId) public {
        super._mint(msg.sender, _tokenId);
    }
    
    function tokenIdToStarInfo(uint256 _tokenId) public view returns(string, string, string, string, string){
        return (tokenIdToStarInfo[_tokenId].name, tokenIdToStarInfo[_tokenId].story, tokenIdToStarInfo[_tokenId].ra, tokenIdToStarInfo[_tokenId].dec, tokenIdToStarInfo[_tokenId].mag);
    }
}






