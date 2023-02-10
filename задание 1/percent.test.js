import { getPercents } from "./percent.js"


describe ("Проверка функции получения процентов", ()=> 
it("сколько будет 20% от 200", ()=>{
    const result = getPercents(20, 200);
    expect(result).toBe(40);
}),
it("сколько будет 50% от 100", ()=>{
    const result = getPercents(50, 100);
    expect(result).toBe(50);
}),
it("сколько будет 25% от 100 (ошибка подсчета)", ()=>{
    const result = getPercents(25, 100);
    expect(result).toBe(40);
})

)