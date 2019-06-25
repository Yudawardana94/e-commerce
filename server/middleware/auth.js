const userModel = require('../models/userModel');
const { verify } = require('../helpers/jwtoken');

module.exports = {
	authenticaiton(req, res, next) {
		let token = req.headers.access_token;

		if (!token) {
			throw { status: 401, message: `Un-authenticated` };
		} else {
			let decode = verify(token);

			userModel
				.findById(decode._id)
				.then(foundUser => {
					if (foundUser === {}) {
						throw { status: 404, message: `User Not Found` };
					} else {
						(req.logedUser = decode), (req.user = token);
						next();
					}
				})
				.catch(err => {
					throw { status: 500, message: `Internal server error. ` };
				});
		}
	},
	authorization(req, res, next) {
        let role = req.logedUser.role
        if(role === 'Admin'){
            next();
        }
        else {
            console.log({status : 401,message : `Un-authorized`})
            throw {status : 401,message : `Un-authorized`}
        }
	},
};
