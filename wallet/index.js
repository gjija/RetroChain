const { INTITAL_BALANCE } = require('../config');



class Wallet {

constructor() {

    this.balance = INTITAL_BALANCE;
    this.keyPair = null;
    this.publicKey = null;


}

toString() {

    return `Wallet - 
            publicKey: ${this.publicKey.toString()}
            balance: ${this.balance}`
}

}

module.exports = Wallet;