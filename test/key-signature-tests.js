var vows = require('vows')
var assert = require('assert')
var KeySignature = require('../lib/key-signature')

vows.describe('Key Signature').addBatch({
  'by value': function () {
    var sign = new KeySignature(1)
    assert.equal(sign.number, 1)
    assert.equal(sign.tonic, 'G')
  },
  'by tonic': function () {
    var sign = new KeySignature('F')
    assert.equal(sign.tonic, 'F')
    assert.equal(sign.number, -1)
  }
}).export(module)
