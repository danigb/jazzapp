module.exports = Chords

var data = require('./chords.json')
var indexes = { }

function Chords(name) {
  return data[name]
}
Chords.get = Chords
Chords.families = [ 'major', 'dominant', 'minor', 'minor7', 'sus4',
  'augmented', 'half-diminished', 'diminished', 'bass', 'note' ]
Chords.names = Object.keys(data)

Chords.forEach = function (callback) {
  Chords.names.forEach(function(name, index, array) {
    callback(data[name], index, data)
  })
}

Chords.family = function (name) {
  if (!indexes.byFamily) {
    indexes.byFamily = {}
    Chords.forEach(function(chord) {
      indexes.byFamily[chord.family] = indexes.byFamily[chord.family] || []
      indexes.byFamily[chord.family].push(chord.name)
    })
  }
  return indexes.byFamily[name]
}
