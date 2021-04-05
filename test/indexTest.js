// var chai = require('chai');
// var sinon = require('sinon');
// const expect = chai.expect;

const { log } = require("..");

// chai.use(sinonChai);

describe('index.js', function () {
  describe('driver', function () {
    it('sets a variable driver equal to bob', function () {
      expect(driver).to.equal('bob');
    });
  });

  describe('console.log()', function () {
    beforeEach(function() {
      spy(console, 'log');
    })

    afterEach(function() {
      console.log.restore();
    })

    it('invokes console.log() with the string "this code was called"', function () {
      log();
      expect(console.log.calledWithExactly('this code was called')).to.be.true;
    });

    it('invokes console.log() with the `driver` variable', function () {
      log();
      expect(console.log.calledWithExactly('bob')).to.be.true;
    });

    it('invokes the console.log with the `driver` variable as the first argument and `is the driver variable name` as the second argument', function () {
      log();
      expect(console.log.calledWithExactly('bob', 'is the driver variable name')).to.be.true;
    });
  });
});
