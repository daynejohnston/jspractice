const express = require('express')
const characters = require('../../controllers/characters')

const routes = function () {
    let characterRouter = express.Router()

    characterRouter.route('/')
            .post(characters.post)
            .get(characters.get)
            .put(characters.put)

    characterRouter.use('/:id', characters.findById)
    characterRouter.route('/:id')
            .get(characters.getById)
            .delete(characters.remove)

    return characterRouter
}

module.exports = routes