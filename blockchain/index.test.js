const Blockchain = require('./index');
const Block = require('./block');

describe('Blockchain', () => {
    let bc, bc2;

    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    })

    it('should start with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('should add a new block', () => {
        const data = "gjija";
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
    });

    it('Validates a valid chain', () => {

        bc2.addBlock('gjija');
        expect(bc.isValidChain(bc2.chain)).toBe(true);


    });

    it('Invalidates a chain with a corrupt genesis block', () => {
        bc2.chain[0].data = 'Wrong Data';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    it('invalidates a corrupt chain', () => {

        bc2.addBlock('gjija');
        bc2.chain[1].data = 'not gjija';
        expect(bc.isValidChain(bc2.chain)).toBe(false);



    });

    it('replaces the chain with a valid chain', () => {

        bc2.addBlock('Biq');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).toEqual(bc2.chain);

    });

    it('does not replace the chain with one of less than or equal to length', () => {

        bc.addBlock('gjija');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).not.toEqual(bc2.chain);

    })

});