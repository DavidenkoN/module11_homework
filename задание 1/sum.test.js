const sum  = require('./sum.js');
const diff = require('./diff222.js');

test('adds 3 + 42 to equal 45', () => {
  expect(sum(3, 42)).toBe(45);
});

test('adds 5 + 15 to equal 20', () => {
    expect(sum(5, 15)).toBe(20);
});

test('adds 5 + 15 to equal 20', () => {
    expect(sum(5, 15)).toBe(20);
});

test('число', () => {
    expect(sum(50, 50)).toBe(100);
});

test('число', () => {
    expect(diff(20, 3)).toBe(17);
});
