import { revertString } from "./revert.js";

describe("it's ok", () => 
{
	it("тестируем abc", () =>
	 	expect(revertString("abc")).toBe("cba")),
	it("тут у нас добрый вечер", () =>
	 	expect(revertString("Добрый вечер")).toBe("речев йырбоД")),
	it("здесь пустая строка", () =>
	 	expect(revertString("")).toBe("")),
	it("число 12345", () =>
	 	expect(revertString(12345)).toBe(54321))
});