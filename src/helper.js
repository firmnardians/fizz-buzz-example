export default function FizzBuzz(number) {
	for (let i = 0; i < number; i++) {
		const data = i + 1;

		if (data % 3 === 0 && data % 5 === 0) {
			console.log('Fizz Buzz');
		} else if (data % 3 === 0) {
			console.log('Fizz');
		} else if (data % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(data);
		}
	}
}
