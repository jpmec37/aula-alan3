import { calcularTotalPedido } from "../functions";
describe('Fechamento de Carrinho', ()=>{
    test('Carrinho vazio retorna 0', ()=>{
        expect(calcularTotalPedido([])).toBe(0)
    }),
    test('Carrinho cheio retorna o valor total', ()=>{
        expect(calcularTotalPedido([{preco: 120, quantidade: 5}, {preco: 100, quantidade: 10}])).toBe(1600)
    })
})