class Miner {

    constructor(blockchain, transactionPool, wallet, p2pServer) {

        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }

    mine() {

        const validTransactions = this.transactionPool.validTransactions();
        // include a reward for the miner

        // create a block consisiting of the valid transactions

        // synchronize chain in the peer to peer server

        // clear the transaction pool
        //broadcast to everyminer to clear their transaction pools

    }


}

module.exports = Miner;