const db = require("../models")
const Item = db.items

exports.create = (req, res) => {
    if (!req.body.itemName) {
        res.status(400).send({ message: "Item name cannot be empty!"})
        return
    }

    const item = new Item({ 
        itemName: req.body.itemName,
        store: req.body.store,
        purchased: req.body.purchased ? req.body.purchased : false
    })

    item
        .save(item)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occured while creating the new item"
            })
        })
}

exports.findAll = (req, res) => {
    const itemName = req.query.itemName
    var condition = itemName ? { itemName: { $regex: new RegExp(itemName), $options: "i" } } : {}

    Item.find(condition)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "An error occured while retrieving items"
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
  
    Item.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Item not found with id " + id })
            else res.send(data)
        })
        .catch(err => {
            res
            .status(500)
            .send({ message: "Error retrieving item with id=" + id })
        })
}

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty!"
        })
    }

    const id = req.params.id

    Item.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update item with id=${id}. Item may not exist`
                })
            } else res.send({ message: "Item updated successfully" })
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating item with id=" + id
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Item.findByIdAndRemove(id)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Cannot delete Item with id=${id}. Item might not exist.`
                })
            } else {
                res.send({
                    message: `Item with id=${id} was deleted.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Item with id=" + id
            })
        })
}

exports.deleteAll = (req, res) => {
    Item.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Items were deleted`
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "An error occured while attempting to delete all items"
            })
        })
}