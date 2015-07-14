var vows = require('vows')
var assert = require('assert')
var spell = require('../')
var names = require('scale-names')(require('scale-names/all'))

var tests = {}
var all = require('./scale-intervals.json')
Object.keys(all).forEach(function (name) {
  tests[name] = function () {
    var expected = all[name]
    var intervals = spell(names.getNumber(name)).join(',')
    assert(intervals === expected,
      'WRONG ' + name + ' ' + expected + ' | ' + intervals)
  }
})

vows.describe('Scale intervals').addBatch({
  'major': function () {
    var intervals = spell(2773)
    assert.deepEqual(intervals, ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'])
  },
  'all scales': tests // TODO: bring back tests
}).export(module)
