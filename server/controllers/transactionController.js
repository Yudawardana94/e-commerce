const transactionModel = require('../models/transactionModel')

class TransactionController {
    static create(req, res, next) {
        let newTransaction = {
            userId: req.logedUser._id,
            items: req.body.items,
            total: req.body.total,
            status: req.body.status
        }

        transactionModel
            .create(newTransaction)
            .then((created) => {
                res.status(200).json(created)
            })
            .catch((err) => [
                res.json(500).json(err)
            ])
    }

    static all(req, res, next) {
        transactionModel
            .find()
            .then((allTransaction) => {
                res.status(200).json(allTransaction)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

    static one(req, res, next) {
        let id = req.params.id
        transactionModel
            .findById(id)
            .then((transaction) => {
                res.status(200).json(transaction)
            })
            .catch((err) => {
                res.json(500).json(err)
            })
    }

    static remove(req, res, next) {

    }
}

module.exports = TransactionController