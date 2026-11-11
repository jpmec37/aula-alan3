function calcularDescontoCupom(valorTotal, cupom) {
  if (valorTotal <= 0) {
    return 0;
  }
  if (cupom === "CIMATEC10") {
    return valorTotal * 0.9;
  } else if (cupom === "ALUNO15") {
    valorTotal = valorTotal - 15;
    if (valorTotal <= 0) {
      return 0;
    }
    return valorTotal;
  } else {
    return valorTotal;
  }
}
function verificarEstoque(qtdDesejada, qtdEstoque) {
  if (qtdDesejada <= 0) {
    return "QUANTIDADE_INVALIDA";
  }
  if (qtdEstoque >= qtdDesejada) {
    return "DISPONIVEL";
  } else {
    return "INDISPONIVEL";
  }
}
function calcularTempoEntrega(distanciaKM, ehExpress) {
  let tempo;
  if (distanciaKM <= 0) {
    return -1;
  }
  tempo = 15 + 5 * distanciaKM;
  if (ehExpress === true) {
    return tempo * 0.5;
  }
  return tempo;
}
function validarTransicaoStatus(statusAtual, novoStatus) {
  if (statusAtual === "PENDENTE") {
    if (novoStatus === "PAGO" || novoStatus === "CANCELADO") {
      return true;
    } else {
      return false;
    }
  } else if (statusAtual === "PAGO") {
    if (novoStatus === "ENVIADO" || novoStatus === "CANCELADO") {
      return true;
    } else {
      return false;
    }
  } else if (statusAtual === "ENVIADO") {
    if (novoStatus === "ENTREGUE") {
      return true;
    } else {
      return false;
    }
  }
  return false;
}
function calcularTotalPedido(array) {
  let taxaEntrega = 0
  if (!array || array == [{}]) {
    return 0;
  }
  array.forEach((element) => {
  taxaEntrega = taxaEntrega + element.preco*element.quantidade
});
return taxaEntrega
}
export {
  calcularDescontoCupom,
  verificarEstoque,
  calcularTempoEntrega,
  validarTransicaoStatus,
  calcularTotalPedido,
};
