document.addEventListener("DOMContentLoaded", function () {
  // Define a data de destino (pode ser ajustada conforme necessário)
  var dataFinal = new Date("2023-12-09T19:30:00");

  // Função para atualizar o contador
  function atualizarContador() {
    var agora = new Date();
    var diferenca = dataFinal - agora;

    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualiza os elementos HTML com os valores calculados
    document.getElementById("dias").innerText = formatarNumero(dias);
    document.getElementById("horas").innerText = formatarNumero(horas);
    document.getElementById("minutos").innerText = formatarNumero(minutos);
    document.getElementById("segundos").innerText = formatarNumero(segundos);
  }

  // Função para formatar números menores que 10 com um zero à esquerda
  function formatarNumero(numero) {
    return numero < 10 ? "0" + numero : numero;
  }

  // Atualiza o contador a cada segundo
  setInterval(atualizarContador, 1000);
});
