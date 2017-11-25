var mongoose = require('mongoose')
var character = require('mongoose').model('Character')

var encounterSchema = mongoose.Schema({
  name: { type: String, required: '{PATH} is required!' },
  characters: [character.schema],
  tags: { type: [String] },
  usesStaticInitiative: { type: Boolean, default: false },
  round: { type: Number, default: 0},
  owner_id: { type: String, required: '{PATH} is required!' }
})

mongoose.model('Encounter', encounterSchema)
