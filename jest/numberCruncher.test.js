function factorsOf(n) {
'use strict';
	if (Number.isNaN(Number(n))) {
		throw new RangeError("Argument Error: Value must be an integer/whole numeric value.");
	}
	if (n < 0) {
		throw new RangeError("Argument Error: Value must be a positive number.");
	}
	if (!Number.isInteger(n)) {
		throw new RangeError("Argument Error: Value must be an whole number.");
	}
	const factors = [];
	for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
		if (n%i === 0) {
			factors.push(i, n/i);
		}
	}

	return factors.sort((a, b) => (a - b));
}

function isPrime(n) {
'use strict';
	return (factorsOf(n).length === 2);
}

test('factors of 12', () => {
	expect(factorsOf(12)).toEqual([1, 2, 3, 4, 6, 12]);
});

test('2 is prime', () => {
	expect(isPrime(2)).toBe(true);
});

test('10 is *not* prime', () => {
	expect(isPrime(10)).toBe(false);
});

test('factorsOf() should throw exception on non-numeric parameter.', () => {
	expect(() => factorsOf('twelve')).toThrow();
});

test('factorsOf() should throw exception on negative number parameter.', () => {
	expect(() => factorsOf(-2)).toThrow();
});

test('factorsOf() should throw exception on non-whole number parameter.', () => {
	expect(() => factorsOf(3.14159)).toThrow();
});

test('isPrime() should return false on non-numeric parameter.', () => {
	expect(isPrime('twelve')).toBe(false);
});

test('isPrime() should return false on negative number parameter.', () => {
	expect(isPrime(-2)).toBe(false);
});

test('isPrime() should return false on non-whole number paramter.', () => {
	expect(isPrime(3.14159)).toBe(false);
});
