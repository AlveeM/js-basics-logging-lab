const chai = require('chai')
global.expect = chai.expect
const sinon = require('sinon')
global.spy = sinon.spy
const sinonChai = require('sinon-chai')
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core')

chai.use(sinonChai);

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

const src = babelResult.code

jsdom({
  html, src
});
