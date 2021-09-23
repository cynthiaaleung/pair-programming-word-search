const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'E', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'L', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'E', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'P', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'H', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'A', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'N', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'T', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'S', 'Q', 'U', 'A', 'L'],
    ], 'ELEPHANTS');

    assert.isTrue(result);
  });

  it("should return false if the letters matrix is empty", function() {
    const result = wordSearch([
      [],
    ], 'ELEPHANTS');

    assert.isFalse(result);
  });

  it("should return false while the letters matrix contain several empty arrays", function() {
    const result = wordSearch([
      [],[],[],[]
    ], 'ELEPHANTS');

    assert.isFalse(result);
  });

  it("should return false when no word is passed into function", function() {
    const result = wordSearch([
      ['U', 'B', 'T', 'N', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'T', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'S', 'Q', 'U', 'A', 'L'],
    ], "");

    assert.isFalse(result);
  });

});
