const Block = require('./block');

describe('Block', () => {
    let data, lastBlock, block;

    beforeEach(() => {
        data = 'Gjija';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('should set the `data` to match the input', () => {
        expect(block.data).toEqual(data);
    });

    it('should set the `lastHash` to match the has of the last block', () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });

});