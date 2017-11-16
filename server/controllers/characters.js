let Character = require('mongoose').model('Character')

const handleError = function(err) {
    console.log(err)
}

const put = function update(req, res) {
    var character = req.character;

    console.log("Character Found")
    console.log(character)

    console.log("Character to update")
    console.log(req.body)

    delete req.body._id
    delete req.body.owner_id

    for (var key in req.body) {
        character[key] = req.body[key]
    }

    character.save()

    res.json(character)
}

const get = function get(req, res) {
    
    const query = { owner_id: req.session.user._id }

    const handleResult = function (err, result) {
        if (err) { res.status(500).send({ error: err }); }
        
        res.status(200).json(result)
    }

    Character.find(query)
             .exec(handleResult)
             .catch(handleError)
    
}

const post = function post(req, res) {
    var character = new Character(req.body)
    character.owner_id = req.session.user._id
    character.save()

    res.status(201).send(character)
}

const remove = function remove(req, res) {
    req.character.remove((err) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(204).send('Removed')
        }
    })
}

const getById = function getById(req, res) {
    res.json(req.character)
}

const findById = function (req, res, next) {
    let query = { _id: req.params.id, owner_id: req.session.user._id }
    console.log(query)
    let handleResult = function(err, character) {
        if (err) {
            res.status(500).send(err)
        }
        else if (character) {
            req.character = character
            next()
        }
        else {
            res.status(404).send(`No such character with id: ${req.params._id}`)
        }
    }

    Character.findById(query, handleResult)
}

module.exports = {
    post: post,
    put: put,
    get: get,
    remove: remove,
    getById: getById,
    findById: findById
}