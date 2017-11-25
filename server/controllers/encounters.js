let Encounter = require('mongoose').model('Encounter')

const handleError = function (err, res) {
    console.log(err)
}

const put = function update (req, res) {
    let encounter = req.encounter

    delete req.body._id
    delete req.body.owner_id

    for (let key in req.body) {
        encounter[key] = req.body[key]
    }

    encounter.tags = encounter.tags.sort((a, b) => a > b)

    encounter.save()
            .then(() => res.status(200).json(encounter))
            .catch((err) => res.status(500).send(err))
}

const get = function get (req, res) {
    const query = { owner_id: req.session.user._id }

    const handleResult = function (err, result) {
        if (err) { res.status(500).send({ error: err }); }

        res.status(200).json(result)
    }

    Encounter.find(query)
             .exec(handleResult)
             .catch(handleError)
}

const post = function post (req, res) {
    let encounter = new Encounter(req.body)
    encounter.owner_id = req.session.user._id
    encounter.tags = encounter.tags.sort((a, b) => a > b)

    encounter.save()
            .then(() => res.status(201).send(encounter))
            .catch((err) => res.status(500).send(err))
}

const remove = function remove (req, res) {
    req.encounter.remove((err) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(204).send('Removed')
        }
    })
}

const getById = function getById (req,res) {
    res.status(200).json(req.encounter)
}

const findById = function (req, res, next) {
    const query = { _id: req.params.id, owner_id: req.session.user._id }

    const handleResult = function (err, encounter) {
        if (err) {
            res.status(500).send(err)
        }
        else if (encounter) {
            req.encounter = encounter
            next()
        }
        else {
            res.status(404).send(`So such encounter with id: ${req.params._id}`)
        }
    }

    Encounter.findById(query, handleResult)
}

module.exports = {
    post: post,
    put: put,
    get: get,
    remove: remove,
    getById: getById,
    findById: findById
}