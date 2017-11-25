const express = require('express')
const encounters = require('../../controllers/encounters')

const routes = function () {
    let encounterRouter = express.Router()

    encounterRouter.route('/')
                .post(encounters.post)
                .get(encounters.get)

    encounterRouter.use('/:id', encounters.findById)
    encounterRouter.route('/:id')
                .get(encounters.getById)
                .put(encounters.put)
                .delete(encounters.remove)

    return encounterRouter
}

module.exports = routes