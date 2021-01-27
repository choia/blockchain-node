import { Blockchain } from "../lib/transaction";

(async function main(): Promise<void> {
  console.log('⏳ Initializing the blockchain, creating the genesis block...');

  const transaction = new Blockchain();
  await transaction.createGenesisBlock();

  transaction.createTransaction({ sender: 'John', recipient: 'Kate', amount: 50 })
  transaction.createTransaction({ sender: 'Kate', recipient: 'Mike', amount: 100 })

  await transaction.minePendingTransaction();

  transaction.createTransaction({ sender: 'Alex', recipient: 'Sara', amount: 150 })
  transaction.createTransaction({ sender: 'Alicia', recipient: 'Alan', amount: 20 })

  await transaction.minePendingTransaction();
  console.log(JSON.stringify(transaction, undefined, 2))
})();