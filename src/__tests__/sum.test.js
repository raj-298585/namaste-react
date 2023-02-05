import { sum } from "../utils/sum";

/**
 * Our first test case
 */
test('Sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 2)).toBe(1);
});