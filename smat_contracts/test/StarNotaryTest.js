const StarNotary = artifacts.require('StarNotary')

contract('StarNotary', accounts => { 
    
    let name = 'the big german star !'
    let story = 'this is my favourite story'
    let ra = "ra_032.155"
    let dec = "dec_121.874"
    let mag = "mag_245.978"
    let tokenId = 1

    let defaultAccount = accounts[0];
    let account1 = accounts[1];
    let account2 = accounts[2]
    let starPrice = web3.toWei(.01, "ether")

    beforeEach(async function() { 
        this.contract = await StarNotary.new({from: defaultAccount})
    })


    // test creating A new Star
    describe('test creating  a new  star', () => { 
        it('test creating a new star and get its info', async function () { 
            await this.contract.createStar(name, story, ra, dec, mag, tokenId, {from: defaultAccount})

            const myStar = await this.contract.tokenIdToStarInfo(tokenId);
            const myStartName = myStar[0].toString()
            const myStarStory = myStar[1].toString()
            const myStarRa = myStar[2].toString()
            const myStarDec = myStar[3].toString()
            const myStarMag = myStar[4].toString()

            assert.equal(myStartName, name)
            assert.equal(myStarStory, story)
            assert.equal(myStarRa, ra)
            assert.equal(myStarDec, dec)
            assert.equal(myStarMag, mag)
        })
    })

     // test  if star exist 
    describe('test if star exists', () => {
        it('star already exists!!', async function () {
            await this.contract.createStar(name, story, ra, dec, mag, tokenId, {from: defaultAccount})

            assert.equal(await this.contract.checkIfStarExist(ra, dec, mag), true)
        })
    })
    
    // test ownerOf star
    describe('test star owner', () => {
        it('star has the rightful owner', async function () {
            await this.contract.createStar(name, story, ra, dec, mag, tokenId, {from: defaultAccount})
            var owner = await this.contract.ownerOf(1, {from: defaultAccount})

            assert.equal(owner, defaultAccount)
        })
    })
    
    
    // test mint() method
    describe('mint function test', () => {
        let tx

        beforeEach(async function() {
            tx = await this.contract.mint(tokenId, {from: defaultAccount})
        })

        it(' test if minted token belongs to the rightful owner', async function () {
            const owner = await this.contract.ownerOf(tokenId, {from: defaultAccount})
            assert.equal(owner, defaultAccount)
        })

    })

    describe('test buyStar', () => { 

        let starPrice = web3.toWei(.01, "ether")

        beforeEach(async function () { 
            await this.contract.createStar(name, story, ra, dec, mag, tokenId, {from: account1})    
        })

            it('account2 is the owner of the star after he  buys it', async function() {
                
                await this.contract.putStarUpForSale(tokenId, starPrice, {from: account1})
                assert.equal(await this.contract.starsForSale(tokenId), starPrice)

                await this.contract.buyStar(tokenId, {from: account2, value: starPrice, gasPrice: 0})
                assert.equal(await this.contract.ownerOf(tokenId), account2)
            })       
        
    })

    //  test getApproved() 
    describe('approve function test', () =>{
        let to = accounts[1]
        let tokenId = 1
    
        beforeEach(async function() {
            await this.contract.createStar(name, story, ra, dec, mag, tokenId, {from: defaultAccount})     
        })


        it('getApproved test', async function() { 
            await this.contract.approve(to, tokenId, {from: defaultAccount})
            assert.equal(await this.contract.getApproved(tokenId, {from: defaultAccount}), to)
        })

    })
    
    //test  SetApprovalForAll(),isApprovedForAll
    describe('setApprovalForAll test', () => {
        let approved = true
        let to = accounts[1]
    

        beforeEach(async function() {
            await this.contract.createStar(name, story, ra, dec, mag, tokenId, {from: defaultAccount})
            
        })


        it('isApprovedForAll test', async function() {

            await this.contract.setApprovalForAll(to, tokenId)
            
            assert.equal(await this.contract.isApprovedForAll(defaultAccount, to, {from: defaultAccount}), approved)
        
        })
       
    })
    
    // safeTransferFrom()
    describe('safeTransferFrom function test', () => {
        let to = accounts[1]
    

        beforeEach(async function() {
            await this.contract.createStar(name, story, ra, dec, mag, tokenId, {from: defaultAccount})
            await this.contract.safeTransferFrom(defaultAccount, to, tokenId)
        })

        //test the OwnerOf
        it('is the owner of the token', async function() {
            assert.equal(await this.contract.ownerOf(tokenId, {from: defaultAccount}), to)
        })

        //test the OwnerOf
        it('is not the owner of the token', async function() {
            assert.notEqual(await this.contract.ownerOf(tokenId, {from: defaultAccount}), defaultAccount)
        })

    })
})
