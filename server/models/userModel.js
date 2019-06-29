const mongoose = require('mongoose');
const cartModel = require('./historyModel')
const {
	emailRegex
} = require('../helpers/emailValidator');
const {
	hash
} = require('../helpers/bcrypt');

let userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'No username'],
	},
	email: {
		type: String,
		required: [true, 'No email'],
		validate: [{
				validator: function (val) {
					if (!emailRegex(val)) {
						return false;
					}
				},
				message: 'Invalid email format. '
			},
			{
				validator: function (val) {
					return new Promise((resolve, reject) => {
						User.findOne({
								email: val,
							})
							.then(found => {
								// console.log(found, '========')
								if (found) {
									// console.log('disini nggak??')
									resolve(false)
								} else {
									// console.log('lohhkan bener')
									resolve(true)
								}
							})
							.catch(err => {
								console.log(err)
							})
					})
				},
				message: 'Email has been used. '
			},
		],
	},
	password: {
		type: String,
		required: [true, 'No password'],
		minlength: [8, 'Minimum password is 8']
	},
	role: String,
	cart: Array
});

userSchema.pre('save', function (next) {
	this.password = hash(this.password);
	next();
});

// userSchema.post('save',function(doc,next) {
// 	console.log (doc, 'ini doc lohh')
// 	let userCart = {
// 		userId : doc._id,
// 		item : [],
// 		status : ''
// 	}
// 	cartModel.create(userCart)
// 		.then(cart => {
// 			console.log (cart)
// 			next()
// 		})
// 		.catch((err)=> {
// 			console.log(err)
// 		})
// })

let User = mongoose.model('User', userSchema);

module.exports = User;
