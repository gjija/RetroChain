const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
    let bc;

    beforeEach(() => {
        bc = new Blockchain();
    })

    it('should start with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('should add a new block', () => {
        const data = "gjija";
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    });
})