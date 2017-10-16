function squareRoot(number) {
'use strict';
	if (number < 0) {
		throw new RangeError("Square Root of negative number is undefined!");
	}
	return Math.sqrt(number);
}

test("square root of 4 is 2", () => {
	expect(squareRoot(4)).toBe(2);
});
