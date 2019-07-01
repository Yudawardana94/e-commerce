const userModel = require('../models/userModel');

const {
	compare
} = require('../helpers/bcrypt');
const {
	sign
} = require('../helpers/jwtoken');

class UserModel {
	static register(req, res, next) {
		let newUser = {
			username: req.body.username,
			password: req.body.password,
			email: req.body.email,
			role: req.body.role || 'Customer',
			cart: [],
		};
		// console.log(newUser)

		// console.log(req.body)
		userModel
			.create(newUser)
			.then(created => {
				console.log(created)
				res.status(201).json(created);
			})
			.catch(err => {
				console.log(err)
				res.status(500).json(err);
			});
	}

	static login(req, res, next) {
		let loginUser = {
			email: req.body.email,
			password: req.body.password,
		};

		userModel
			.findOne({
				email: loginUser.email,
			})
			.then(foundUser => {
				if (foundUser) {
					console.log(foundUser);
					let compared = compare(loginUser.password, foundUser.password);
					if (compared) {
						let payload = sign({
							_id: foundUser._id,
							username: foundUser.username,
							email: foundUser.email,
							role: foundUser.role,
						});

						req.headers.access_token = payload;
						res.status(200).json({
							access_token: payload,
							username: foundUser.username,
							email: foundUser.email,
							role: foundUser.role
						});
					} else {
						res.status(401)
							.json({
								message: `Invalid email / password. `
							})
					}
				} else {
					res.status(401)
						.json({
							message: `Invalid email / password. `
						})
				}
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					message: `Internal server Error. `
				})
			});
	}

	static findOne(req, res, next) {
		let email = req.body.email
		console.log(req.body, 'lohhhh kok bisa?')
		userModel
			.findOne({
				email
			})
			.then(found => {
				console.log(found, 'ini ')
				res.status(200).json(found)
			})
			.catch(err => {
				console.log(err)
				res.status(500).json(err)
			})
	}

	static update(req, res, nect) {
		console.log('update')
		console.log(req.body)
		userModel
			.findOneAndUpdate({
				email: req.body.email
			}, {
				cart: req.body.cart
			})
			.then((updated) => {
				console.log(updated)
				res.status(200).json(updated)
			})
			.check((err) => {
				console.log(err)
				res.status(500).json(err)
			})
	}
}

module.exports = UserModel;