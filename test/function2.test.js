import { verificarEstoque } from "../functions";
describe('Verificar Estoque', ()=>{
    test('Quantidade Desejada inferior a 0 retorna QUANTIDADE_INVALIDA', ()=>{
        expect(verificarEstoque(0, 100)).toBe("QUANTIDADE_INVALIDA")
    }),
    test('Quantidade Desejada inferior ou igual a Quantidade em Estoque retorna DISPONIVEL', ()=>{
        expect(verificarEstoque(90, 100)).toBe("DISPONIVEL")
    }),
    test('Quantidade Desejada Superior a Quantidade em Estoque retorna INDISPONIVEL', ()=>{
        expect(verificarEstoque(120, 100)).toBe("INDISPONIVEL")
    })
})