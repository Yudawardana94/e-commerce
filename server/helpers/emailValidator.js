module.exports = {
	emailRegex(email) {
		let isTrue = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
		if (isTrue) {
			return true;
		} else {
			return false;
		}
	},
};
