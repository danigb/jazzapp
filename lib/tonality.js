'use strict'

module.exports = Tonality

var MAJOR = 'Gb Db Ab Eb Bb F C G D A E B F# C# G# D# A# F'.split(' ')
var MINOR = 'Eb Bb F C G D A E B F# C# G# D#'

function Tonality(tonic) {
  if (!(this instanceof Tonality)) return new Tonality(tonic)

  this.tonic = tonic
  this.major = this.tonic
  this.minor = MAJOR[MAJOR.indexOf(tonic) + 3]
}
