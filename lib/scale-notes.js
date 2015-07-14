
var Scales = require('musical-scales')
var Note = require('note-pitch')
var spell = require('./scale-spell.js')

module.exports = function(root, scaleId) {
  console.log(root, scaleId)
   var scale = Scales.get(scaleId)
   return Note.transpose(root, spell(scale.binary))
}
