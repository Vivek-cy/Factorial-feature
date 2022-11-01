const assert = require("assert");
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('for a given number 5', () =>{
      //Setup
      const expected = 120;
      //Exercise
      const result = Calculate.factorial(5);
      //Verify
      assert.equal(result, expected);
    });
    it('for a given number 3', () =>{
      //Setup
      const expected = 6;
      //Exercise
      const result = Calculate.factorial(3);
      //Verify
      assert.equal(result, expected);
    });
    it('returns 1 if input is 0', () =>{
      //Setup
      const expected = 1;
      //Exercise
      const result = Calculate.factorial(0);
      //Verify
      assert.equal(result, expected);
    })
  });
});