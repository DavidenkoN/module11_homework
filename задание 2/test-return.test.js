import { repeatWord } from "./function2.js";

describe("it's ok", () => 
{
	it("Вася", () => 
		expect(repeatWord("Вася", 3)).toBe("Вася1, Вася2, Вася3, ")),
	it("Текст", () => 
		expect(repeatWord("Текст", 0)).toBe("")),
	it("пустая строка 2 раза", () => 
		expect(repeatWord("", 2)).toBe("1, 2, "))
	it("повторить 10 4 раза", () => 
		expect(repeatWord(10, 4)).toBe("101, 102, 103, 104, "))
});