export default function FizzBuzz(number) {
	for (let i = 0; i < number; i++) {
		const data = i + 1;

		if (data % 3 === 0 && data % 5 === 0) {
			document.write(`<p>Fizz Buzz<p/>`);
		} else if (data % 3 === 0) {
			document.write(`<p>Fizz<p/>`);
		} else if (data % 5 === 0) {
			document.write(`<p>Buzz<p/>`);
		} else {
			document.write(`<p>${data}<p/>`);
		}
	}
}
