const add = require('../src/addNumber');

test('adds two numbers correctly', () => {
    expect(add("")).toBe(0);
});
test('adds two numbers correctly', () => {
    expect(add("1")).toBe(1);
});
test('adds two numbers correctly', () => {
    expect(add("1,2")).toBe(3);
});
test('adds numbers correctly', () => {
    expect(add("1,2,3,4,5")).toBe(15);
});
test('adds numbers with \\n', () => {
    expect(add("1\n2,3")).toBe(6);
});
test('adds numbers with delimiter ;', () => {
    expect(add("//;\n1;2")).toBe(3);
});
test('Negative numbers not allowed', () => {
    expect(() => add("-1,-2")).toThrow("negative numbers not allowed -1,-2");
});
test('Ignore numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2);
});
test('Delimiter of any length', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});
test('Multiple delimiters', () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
});
test('Multiple delimiters with length longer than one char', () => {
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
});  
