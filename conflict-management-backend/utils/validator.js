const isStringValid = (str) => {
	if (!str?.trim()?.length || !str) {
		return false;
	}

	return true;
};

const isValidNumber = (num) => {
	console.log(/^[0-9]+$/.test(num));
	return /^[0-9]+$/.test(num);
};

module.exports = {
	isStringValid,
	isValidNumber,
};
