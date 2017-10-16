function squareRoot(number) {
'use strict';
	if (number < 0) {
		throw new RangeError("Square Root of negative number is undefined!");
	}
	return Math.sqrt(number);
}

function imaginarySquareRoot(number) {
'use strict';
	let answer;
	try {
		answer = String(squareRoot(number));
	} catch (error) {
		console.log(error);
		answer = squareRoot((-1)*number) + "i";
	} finally {
		answer = `+/-${answer}`;
	}

	return answer;
}

test("square root of 4 is 2", () => {
	expect(squareRoot(4)).toBe(2);
});

test("square root of -4 is +/-2i", () => {
	expect(imaginarySquareRoot(-4)).toBe("+/-2i");
});
