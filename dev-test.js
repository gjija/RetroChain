const Block = require('./block');

const fooBlock = Block.mineBlock(Block.genesis(), 'gjija');
console.log(fooBlock.toString());