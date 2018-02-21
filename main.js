const SHA256 = require('crypto-js/sha1');


// class definition of Block
class Block{
    constructor(index, timestamp, data, previousHash = ""){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
      //  this.hash = "";
      this.hash = this.calculateHash();
    }

    // method  for calculating Hash of the current Block

    calculateHash(){
        return SHA256(this.index + " "+this.previousHash+ ""+ this.timestamp +" "+ JSON.stringify(this.data));
    }


}

// Declaration of Blockchain entity

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0, "01/01/2018", "Genisis Block", {amount : "0"});
    }

    getLatestBlock(){
        return this.chain[this.chain.length];
    }
     // method  for calculating Hash of the current Block

     calculateHash(){
        return SHA256(this.index + " "+this.previousHash+ ""+ this.timestamp +" "+ JSON.stringify(this.data));
    }



    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock.hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    // This method is used to validate the blockchain
    isChainValid(){
        newBlock.previousHash = this.getLatestBlock.hash;
        for(let i=1; i<this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash != previousBlock.hash){
                return false;
            }
        }
    }
}

let demoBlockChain = new Blockchain();
demoBlockChain.addBlock( new Block(1, "10/01/2018", {amount:"4" }));
demoBlockChain.addBlock( new Block(2, "12/01/2018", {amount:"10" }));

console.log("Is Blockchain valid? "+ demoBlockChain.isChainValid());
console.log(JSON.stringify(demoBlockChain, null, 4));