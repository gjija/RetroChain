const Transaction = require('./transaction');
const ChainUtil = require('../chain-util');

const Wallet = require('./index');


describe('Transcation', () => {

    let transaction, wallet, recipient, amount;
    beforeEach(() => {

        wallet = new Wallet();
        amount = 50;
        recipient = 'agoni';
        transaction = Transaction.newTransaction(wallet, recipient, amount);

    });

   it('outputs the `amount` subtracted from the wallet balance', () => {
       expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount).toEqual(wallet.balance - amount);
   });


   it('outputs the `amount` added to the recipient', () => {

    expect(transaction.outputs.find(output => output.address === recipient).amount);

   });

   describe('transcating with an amout that exceeds the balance', () => {

    beforeEach(() => {

        amount = 50000;
        transaction = Transaction.newTransaction(wallet, recipient, amount);
    });


    it('does not create the transaction', () => {

        expect(transaction).toEqual(undefined);

    });

   });

});