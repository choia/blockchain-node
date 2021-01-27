import * as crypto from 'crypto';

export class Block {
  readonly hash: string;
  readonly nonce: number;

  constructor(
    readonly index: number,
    readonly previousHash: string,
    readonly timestamp: number,
    readonly data: string
  ) {
    const { hash, nonce } = this.mine();
    this.hash = hash
    this.nonce = nonce
  }

  private calculateHash(nonce: number): string {
    const data = this.index + this.previousHash + this.timestamp + this.data + nonce;
    return crypto
      .createHash('sha256')
      .update(data)
      .digest('hex')
  }

  private mine(): { hash:string, nonce: number } {
    let hash: string;
    let nonce: number = 0

    do {
      hash = this.calculateHash(++nonce)
    } while (hash.startsWith('00000') === false)

    return {hash, nonce}
  }
}