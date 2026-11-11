import { calcularDescontoCupom } from "../functions";
describe('Calcular desconto via cupom', ()=>{
    test('Valor inferior a 0 deve retornar 0', ()=>{
        expect(calcularDescontoCupom(-5, "CIMATEC10")).toBe(0)
    }),
    test('Cupom de 10% aplicado com cupom CIMATEC10', ()=>{
        expect(calcularDescontoCupom(100, "CIMATEC10")).toBe(90)
    }),
    test('Cupom de 15 reais com cupom ALUNO15', ()=>{
        expect(calcularDescontoCupom(100, "ALUNO15")).toBe(85)
    }),
    test('Se cupom for invalido retornar valor na integra', ()=>{
        expect(calcularDescontoCupom(200, "CIMATEC")).toBe(200)
    }),
    test('Se valor total for inferior a 0 após aplicar ALUNO15 retornar 0', ()=>{
        expect(calcularDescontoCupom(14, "ALUNO15")).toBe(0)
    })
})