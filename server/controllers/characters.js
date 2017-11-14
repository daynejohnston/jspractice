let Character = require('mongoose').model('Character')

const handleError = function(err) {
    console.log(err)
}

const update = function update(req, res) {
    let characterData = req.body
    const query = { _id: characterData._id }
    delete characterData._id
    const options = { upsert: true, new: true, setDefaultsOnInsert: true }
    
    const handleResult = function (err, result) {
        if (err) { res.status(500).send({error: err}); }

        res.status(200).send(result)
    }

    Character.update(query, characterData, options, handleResult)
}

const getAll = function getAll(req, res) {

    const query = { owner: req.session.user._id }

    const handleResult = function (err, result) {
        if (err) { res.status(500).send({ error: err }); }

        res.status(200).send(result)
    }

    Character.find(query)
             .exec(handleResult)
             .catch(handleError)
    
}

const getById = function getById(req, res) {
    const query = { _id: req.params.id, owner: req.session.user._id }

    const handleResult = function (err, result) {
        if (err) { res.status(500).send({ error: err }); }

        res.status(200).send(result)
    }
    
    Character.findOne(query)
             .exec(handleResult)
             .catch(handleError)
}

const remove = function remove(req, res) {
    const query = { _id: req.params.id, owner: req.session.user._id }

    const handleResult = function (err, result) {
        if (err) { res.status(500).send({ error: err }); }

        res.status(200).send(result)
    }

    Character.remove(query)
             .exec(handleResult)
             .catch(handleError)
}

module.exports = {
    update: update,
    getAll: getAll,
    getById: getById,
    remove: remove
}