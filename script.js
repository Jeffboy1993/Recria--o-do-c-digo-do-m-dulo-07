// Classe //
class Parquimetro {
    constructor(valor) {
      this.valor = parseFloat(valor);
      this.tabela = [
        { valor: 1.00, tempo: 30 },
        { valor: 1.75, tempo: 60 },
        { valor: 3.00, tempo: 120 },
      ];
    }

// Método //
   calcularTempoETroco() {
    if (this.valor < 1.00) {
      return { mensagem: "Valor insuficiente", tempo: 0, troco: 0 };
    }

    let tempo = 0;
    let troco = 0;

    for (let i = this.tabela.length - 1; i >= 0; i--) {
      if (this.valor >= this.tabela[i].valor) {
        tempo = this.tabela[i].tempo;
        troco = (this.valor - this.tabela[i].valor).toFixed(2);
        break;
    }
  }

    return { mensagem: `Tempo de estacionamento: ${tempo} minutos`, tempo, troco };
  }
}
// Função //
function calcular() {
  const valorInput = document.getElementById("valor").value;
  const parquimetro = new Parquimetro(valorInput);
  const resultado = parquimetro.calcularTempoETroco();

  const resultadoDiv = document.getElementById("resultado");
  if (resultado.tempo === 0) {
    resultadoDiv.innerHTML = `<p style="color:red">${resultado.mensagem}</p>`;
  } else {
    resultadoDiv.innerHTML = `
    <p>${resultado.mensagem}</p>
    <p>Troco: R$ ${resultado.troco}</p>
    `;
  }
}