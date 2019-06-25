const historyModel = require('../models/historyModel');
const { verify } = require('../helpers/jwtoken');

class HistoryController {
	static add(req, res, next) {
		let newTransaction = {
			userId: req.body.userId,
			productId: req.body.productId,
			ammount: req.body.ammount,
			date: new Date(),
			status: 'ordered',
		};

		historyModel
			.create(newTransaction)
			.then(added => {
				console.log(added);
				res.status(201).json(added);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json(err);
			});
	}

	static find(req, res, next) {
		let userData = verify(req.headers.token);

		historyModel
			.find({
				userId: userData._id,
			})
			.then(found => {
				console.log(found);
				res.status(200).json(found);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json(err);
			});
	}

	static update(req, res, next) {
		let id = req.params.id;

		historyModel
			.findOneAndUpdate(
				id,
				{
					status: req.body.status,
				},
				{
					new: true,
				}
			)
			.then(updated => {
				console.log(updated);
				res.status(200).json(updated);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json(err);
			});
	}

	static remove(req, res, next) {
		let id = req.params.id;

		historyModel
			.findOneAndDelete(id)
			.then(deleted => {
				console.log(deleted);
				res.status(200).json(deleted);
			})
			.catch(err => {
				console.log(err);
				res.status(200).json(err);
			});
	}
}

module.exports = HistoryController;
