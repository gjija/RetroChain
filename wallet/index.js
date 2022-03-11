const ChainUtil = require('../chain-util');
const { INTITAL_BALANCE } = require('../config');



class Wallet {

constructor() {

    this.balance = INTITAL_BALANCE;
    this.keyPair = ChainUtil.genKeyPair();
    this.publicKey = this.keyPair.getPublic().encode('hex');
    


}

toString() {

    return `Wallet - 
            publicKey: ${this.publicKey.toString()}
            balance: ${this.balance}
            privateKey: ${this.keyPair.getPrivate('hex').toString()}  `

}






}


module.exports = Wallet;