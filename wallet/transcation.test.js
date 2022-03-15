const Wallet = require('./index');
const Transaction = require('./transaction');
const ChainUtil = require('../chain-util');



describe('Transcation', () => {

    let transaction, wallet, amount, recipient;
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

        expect(transaction.outputs.find(output => output.address === recipient).amount).toEqual(amount);

    });


    it('inputs the balance of the wallet', () => {


        expect(transaction.input.amount).toEqual(wallet.balance);



    });

    it('validates a valid transaction', () => {

        expect(Transaction.verifyTransaction(transaction)).toBe(true);


    });
    it('invalidates a corrup transcation', () => {

        transaction.outputs[0].amount = 50000;
        expect(Transaction.verifyTransaction(transaction)).toBe(false);

    });

    describe('transcating with an amount that exceeds the balance', () => {

        beforeEach(() => {

            amount = 50000;
            transaction = Transaction.newTransaction(wallet, recipient, amount);
        });


        it('does not create the transaction', () => {

            expect(transaction).toEqual(undefined);

        });

    });

    describe('and updating a transaction', () => {

        let nextAmount, nextRecipient;

        beforeEach(() => {
            nextAmount = 20;
            nextRecipient = 'Gjija-Genesis';
            transaction = transaction.update(wallet, nextRecipient, nextAmount);


        });

        it('subtracts the next amount from the senders outputs', () => {

            expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount)
                .toEqual(wallet.balance - amount - nextAmount);

        });

        it('outputs an amount fo the next recipient', () => {

            expect(transaction.outputs.find(output => output.address === nextRecipient).amount).toEqual(nextAmount);


        });

    });

});