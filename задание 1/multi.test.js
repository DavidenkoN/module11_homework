import { multiply } from './multi.js'; 

describe("",()=>
  it("Проверка функции умножения #1", ()=>
  {
    const result = multiply(10, 20);
    expect(result).toBe(200);
  }),
  it("Проверка функции умножения #2", ()=>
  {
    const result = multiply(3, "Ваорлорплор");
    expect(result).toBe(15);
  })
  ,
  it("Проверка функции умножения #3", ()=>
  {
    const result = multiply(30, 5);
    expect(result).toBe(150);
  })  
)