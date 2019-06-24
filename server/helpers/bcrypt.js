const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = {
	hash: function(password) {
		let hashed = bcrypt.hashSync(password, salt);
		return hashed;
	},
	compare: function(input, hased) {
		console.log(input, hased);

		let compared = bcrypt.compareSync(input, hased);
		return compared;
	},
};
