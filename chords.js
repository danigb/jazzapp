
var data = require('./chords-teoria.json')

function generateData() {
  output = {}

  Object.keys(data).forEach(function(name) {
    var source = data[name]
    if(!source.same) {
      source.name = source.name.substring(1)
      output[name.substring(1)] = source
    }
  })

  Object.keys(data).forEach(function(name) {
    var source = data[name]
    if (source.same) {
      var chord = output[source.same.substring(1)]
      if(!chord) console.log('chord not found', name, source, source.same.substring(1))
      else {
        chord.alias = chord.alias || []
        chord.alias.push(name.substring(1))
      }
    }
  })

  require('fs').writeFileSync('chords.json', JSON.stringify(output, null, 2))
}

function generateFamilies() {
  var families = []
  Object.keys(data).forEach(function (name) {
    var source = data[name]
    if (!source.same) {
      var fam = families[source.family] = families[source.family] || []
      fam.push(name.substring(1))
    }
  })
  families = Object.keys(families)
  require('fs').writeFileSync('chord-families.json', JSON.stringify(families, null, 2))
}

generateFamilies()
