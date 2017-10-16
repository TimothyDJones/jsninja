function factorsOf(n) {
'use strict';
	const factors = [];
	for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
		if (n%i === 0) {
			factors.push(i, n/i);
		}
	}

	return factors.sort((a, b) => (a - b));
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
