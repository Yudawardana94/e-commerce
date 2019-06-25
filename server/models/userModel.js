const mongoose = require('mongoose');
const cartModel = require('./historyModel')
const { emailRegex } = require('../helpers/emailValidator');
const { hash } = require('../helpers/bcrypt');

let userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		validate: [
			{
				validator: function(val) {
					if (!emailRegex(val)) {
						throw { status: 400, message: 'Invalid format Email. ' };
					}
				},
			},
			{
				validator: function(val, next) {
					User.findOne({
						email: val,
					})
						.then(found => {
							if (found) {
								throw { status: 400, message: `Email has been Used. ` };
							} else {
								next();
							}
						})
						.catch(err => {
							throw { status: 500, message: `Internal server error. ` };
						});
				},
			},
		],
	},
	password: {
		type: String,
		required: true,
	},
	role : String,
	cart: Array
});

userSchema.pre('save', function(next) {
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
