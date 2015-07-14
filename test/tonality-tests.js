var vows = require('vows')
var assert = require('assert')
var Tonality = require('../lib/tonality')

vows.describe('Tonality').addBatch({
  'simple': function () {
    var t = new Tonality('G')
    assert.equal(t.tonic, 'G')
    assert.equal(t.major, 'G')
    assert.equal(t.minor, 'E')
  },
}).export(module)
