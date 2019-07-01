const productModel = require('../models/ItemModel');

class ProductController {
	static findAll(req, res, next) {
		productModel
			.find()
			.then(found => {
				res.status(200).json(found);
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}

	// static  findUsers (req,res,next) {
	//     // let userId = req.logedUser._id

	//     productModel
	//         .find({
	//             id : userId
	//         })
	//         .then((userItem)=> {
	//             res.status(200).json(userItem)
	//         })
	//         .catch((err)=> {
	//             res.status(200)
	//         })
	// }

	static product(req, res, next) {
		let id = req.params.id;

		productModel
			.findById(id)
			.then(found => {
				if (found) {
					res.status(200).json(found);
				} else {
					// throw ({status : 404, message : `Data not Found. `})
					res.status(404).json({
						message: `Data not Found. `
					});
				}
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}

	static create(req, res, next) {
		let newProduct = {
			name: req.body.name,
			// image: req.file.cloudStoragePublicUrl,
			category: req.body.category,
			description: req.body.description,
			stock: req.body.stock,
			price: req.body.price,
			created: new Date()
		};
		console.log(newProduct)
		productModel
			.create(newProduct)
			.then(creataed => {
				res.status(201).json(creataed);
			})
			.catch(err => {
				res.status(400).json(err);
			});
	}

	static update(req, res, next) {
		let update = {};
		let productId = req.params.id;

		if (req.body.name) {
			update.name = req.body.name;
		}
		if (req.body.description) {
			update.description = req.body.description;
		}
		if (req.body.price) {
			update.price = req.body.price;
		}
		if (req.body.stock) {
			update.stock = req.body.stock;
		}
		if (req.body.condition) {
			update.condition = req.body.condition;
		}
		if (req.body.location) {
			update.location = req.body.location;
		}

		productModel
			.findByIdAndUpdate(productId, update, {
				new: true
			})
			.then(newUpdate => {
				res.status(200).json(newUpdate);
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}

	static remove(req, res, next) {
		let productId = req.params.id;
		// console.log (productId)

		productModel
			.findByIdAndDelete(productId)
			.then(deleted => {
				console.log('berhasil')
				console.log(deleted,'==>')
				res.status(200).json(deleted);
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}
}

module.exports = ProductController;