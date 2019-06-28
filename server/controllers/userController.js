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
		userModel
			.create(newUser)
			.then(created => {
				// console.log(created)
				res.status(201).json(created);
			})
			.catch(err => {
				// console.log(err)
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
					// console.log(foundUser);
					let compared = compare(loginUser.password, foundUser.password);
					if (compared) {
						let token = sign({
							_id: foundUser._id,
							username: foundUser.username,
							email: foundUser.email,
							role: foundUser.role,
						});

						req.headers.access_token = token;
						res.status(200).json({
							access_token: token
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
}

module.exports = UserModel;