var chai = require('chai'),
  expect = chai.expect,
  add = require('../add'); //the file to be tested

describe('tests the add file' , function() {
  it('adds two numbers a and b where a and b are same', function() {
    var sum = add.add(2,2);
    expect(sum).to.equal(4);
  });

  it('adds two numbers a and b where a and b are not same', function() {
    var sum = add.add(3,2);
    expect(sum).to.equal(5);
  });
});
