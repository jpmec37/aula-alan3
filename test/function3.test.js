import { calcularTempoEntrega } from "../functions";
describe('Calcular Tempo de Entrega', ()=>{
    test('Distancia inferior ou igual a 0 retorna -1', () =>{
        expect(calcularTempoEntrega(0, true)).toBe(-1)
    }),
    test('Distancia superior a 0 retorna formula dos minutos de entrega resolvido', () =>{
        expect(calcularTempoEntrega(20, false)).toBe(115)
    }),
    test('Distancia superior a 0 e ehExpress true retorna formula dos minutos de entrega resolvido com 50% do tempo', () =>{
        expect(calcularTempoEntrega(25, true)).toBe(70)
    })
})