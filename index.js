const nameCase = (input) =>
	input[0].toUpperCase() + input.slice(1).toLowerCase();
module.exports = (kebabCase) =>
	kebabCase
		.split('-')
		.map((input, index) => (index === 0 ? input : nameCase(input)));
