const Block = require('./block');
const { adjustDifficulty } = require('./block');


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

    it('generates a hash that mateches the difficulty',  () => {

        expect(block.hash.substring(0, block.difficulty)).toEqual('0'.repeat(block.difficulty));

    });

    it('lowers the difficulty for slowly mined blocks', () => {

        expect(Block.adjustDifficulty(block, block.timestamp+360000))
        .toEqual(block.difficulty-1);
    });

    it('raises the difficulty for quicklu mined blocks', () => {

        expect(Block.adjustDifficulty(block, block.timestamp+1))
        .toEqual(block.difficulty+1);

    });

});