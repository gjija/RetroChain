const ChainUtil = require('../chain-util');
const { INTITAL_BALANCE } = require('../config');
const Transaction = require('./transaction');



class Wallet {

    constructor() {

        this.balance = INTITAL_BALANCE;
        this.keyPair = ChainUtil.genKeyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');



    }

    toString() {

        return `Wallet - 
            publicKey: ${this.publicKey.toString()}
            balance: ${this.balance}`

    }

    sign(dataHash) {

        return this.keyPair.sign(dataHash);

    }

    createTransaction(recipient, amount, TransactionPool) {

        if( amount > this.balance) {

            console.log(`Amount: ${amount} exceeds current balanca ${this.balance}`);

            
        }

        let transaction = TransactionPool.existingTransaction(this.publicKey);

        if(transaction) {

            transaction.update(this, recipient, amount);
            

        } else {

            transaction = Transaction.newTransaction(this, recipient, amount);
            TransactionPool.updateOrAddTransaction(transaction);


        }

        return transaction;
    }

}


module.exports = Wallet;