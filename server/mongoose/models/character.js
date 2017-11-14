const mongoose = require('mongoose')

const characterTypes = [
    'Enemy',
    'NPC',
    'Player'
]

const characterSchema = mongoose.Schema({
    name: { type: String, required: '{PATH} is required!' },
    characterType: { type: String, enum: characterTypes },
    maxHitPoints: { type: Number, required: '{PATH} are required!' },
    armorClass: {
      base: { type: Number },
      touch: { type: Number },
      flatFooted: {type: Number}
    },
    savingThrow: {
      fortitude: { type: Number },
      reflex: { type: Number },
      will: { type: Number }
    },
    initiativeBonus: { type: Number, required: '{PATH} is required!' },
    tags: { type: [String] },
    currentHP: { type: Number },
    initiative: { type: Number, default: 0 },
    owner_id: { type: String, required: '{PATH} did not specify an owner!' }
})

mongoose.model('Character', characterSchema)