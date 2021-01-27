import { Block } from './block';

export class Blockchain {
  private chain: Block[] = [];

  private get latestBlock() {
    return this.chain[this.chain.length - 1]
  }

  constructor() {
    this.chain.push(new Block(0, '0', Date.now(), 'Genesis Block'));
  }

  addBlock(data: string) {
    const block = new Block(
      this.latestBlock.index + 1,
      this.latestBlock.hash,
      Date.now(),
      data
    )
    this.chain.push(block)
  }
}

console.log('Creating the blockchain with the genesis block...')
const blockchain = new Blockchain()

console.log('Mining block #1...')
blockchain.addBlock('first block')

console.log('Mining block #2...')
blockchain.addBlock('second block')

console.log(JSON.stringify(blockchain, undefined, 2))