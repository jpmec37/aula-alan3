import { validarTransicaoStatus } from "../functions";
describe('Validar o status de transação', () =>{
    test('O status de PENDENTE so pode sair para PAGO ou CANCELADO', ()=>{
        expect(validarTransicaoStatus("PENDENTE", "PAGO")).toBeTruthy()
        expect(validarTransicaoStatus("PENDENTE", "CANCELADO")).toBeTruthy()
    }),
    test('O status de PAGO so pode sair para ENVIADO ou CANCELADO', ()=>{
        expect(validarTransicaoStatus("PAGO", "ENVIADO")).toBeTruthy()
        expect(validarTransicaoStatus("PAGO", "CANCELADO")).toBeTruthy()
    }),
    test('O status de ENVIADO so pode sair para ENTREGUE', ()=>{
        expect(validarTransicaoStatus("ENVIADO", "ENTREGUE")).toBeTruthy()
    }),
    test('O status deve seguir a regra estabelecida', ()=>{
        expect(validarTransicaoStatus("PENDENTE", "ENTREGUE")).toBeFalsy()
    })
})