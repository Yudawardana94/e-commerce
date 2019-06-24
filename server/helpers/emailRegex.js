module.exports = {
	emialRegex(email) {
		let isTrue = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value);
		return isTrue;
	},
};
