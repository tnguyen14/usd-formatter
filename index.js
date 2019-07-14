// simple money formatter
export default function money(amount) {
	if (isNaN(amount)) {
		console.error(`${amount} is not a number`);
		return '$0.00';
	} else {
		return '$' + Number(amount).toFixed(2);
	}
}
