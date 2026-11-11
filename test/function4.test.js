import { validarTransicaoStatus } from "../functions";
describe('Validar o status de transação', () =>{
    test('O status de PENDENTE so pode sair para PAGO ou CANCELADO', ()=>{
        expect(validarTransicaoStatus("PENDENTE", "PAGO")).toBe(true)
        expect(validarTransicaoStatus("PENDENTE", "CANCELADO")).toBe(true)
    }),
    test('O status de PAGO so pode sair para ENVIADO ou CANCELADO', ()=>{
        expect(validarTransicaoStatus("PAGO", "ENVIADO")).toBe(true)
        expect(validarTransicaoStatus("PAGO", "CANCELADO")).toBe(true)
    }),
    test('O status de ENVIADO so pode sair para ENTREGUE', ()=>{
        expect(validarTransicaoStatus("ENVIADO", "ENTREGUE")).toBe(true)
    }),
    test('O status deve seguir a regra estabelecida', ()=>{
        expect(validarTransicaoStatus("PENDENTE", "ENTREGUE")).toBe(false)
    })
})