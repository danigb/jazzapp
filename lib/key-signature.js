'use strict'

var SHARP = 'C G D A E B F# C# G# D# A# E# B#'.split(' ')
var FLAT = 'C F Bb Eb Ab Db Gb Cb Fb'.split(' ')

module.exports = KeySignature

function KeySignature(value) {
  if (!(this instanceof KeySignature)) return new KeySignature(value)

  if (typeof value === 'string') {
    this.tonic = value
    this.number = SHARP.indexOf(this.tonic)
    if (this.number < 0) this.number = -1 * FLAT.indexOf(this.tonic)
  } else {
    this.number = +value
    if (this.number >= 0) this.tonic = SHARP[this.number]
    else if (this.number < 0) this.tonic = FLAT[-this.number]
  }
}
