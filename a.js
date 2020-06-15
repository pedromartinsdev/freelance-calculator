
function calcularValorHora() {
  valorHora.qtdePorMes = parseFloat(formatarValorParaDecimal($("#field-valor-hora-1").val()))
  valorHora.horasPorDia = parseFloat($("#field-valor-hora-2").val())
  valorHora.diasPorSemana = parseFloat($("#field-valor-hora-3").val())
  valorHora.semanasPorAno = parseFloat($("#field-valor-hora-4").val());
  var a = valorHora.horasPorDia * valorHora.diasPorSemana // 40
  var b = a * valorHora.semanasPorAno; //40 * 4 = 160
  var c = 12 * valorHora.qtdePorMes / (52.1 * a - b); //
  c += 20 * c / 100, 
  c = parseFloat(c).toFixed(2);
  var d = !isNaN(c) && isFinite(c) ? "R$ " + Math.ceil(c) + ",00" : "R$ 0,00";
  $("#valorHoraFinal").text(d), $("#field-valor-projeto-1").val(Math.ceil(c) + ".00").priceFormat({
    prefix: "",
    centsSeparator: ",",
    thousandsSeparator: ".",
    limit: 10
  }), calcularValorProjeto()
}

function calcularValorProjeto() {
  valorProjeto.valorHora = parseFloat(formatarValorParaDecimal($("#field-valor-projeto-1").val()))
  valorProjeto.horasPorDia = parseFloat($("#field-valor-projeto-2").val())
  valorProjeto.semanas = parseFloat($("#field-valor-projeto-3").val());
  var a = valorProjeto.valorHora * valorProjeto.horasPorDia * valorProjeto.semanas;
  a = parseFloat(a).toFixed(2);
  var b = !isNaN(a) && isFinite(a) ? "R$ " + Math.ceil(a) + ",00" : "R$ 0,00";
  $("#valorProjetoFinal").text(b)
}

function formatarValorParaDecimal(a) {
  return a = a.split(".").join(""), a = a.split(",").join(".")
}

function formatReal(a) {
  var b = a + "";
  return b = b.replace(/([0-9]{2})$/g, ",$1"), b.length > 6 && (b = b.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")), b
}


var valorHora = {};
valorHora.qtdePorMes = 0, valorHora.horasPorDia = 0, valorHora.diasPorSemana = 0, valorHora.semanasPorAno = 0;
var valorProjeto = {};
valorProjeto.valorHora = 0, valorProjeto.horasPorDia = 0, valorProjeto.semanas = 0, $(document).ready(function () {
  $('input[type="text"]').priceFormat({
    prefix: "",
    centsSeparator: ",",
    thousandsSeparator: ".",
    limit: 9
  });
  var a, b;
  $("input").bind("keyup blur", function () {
    a = $(this), b = -1 !== a.attr("id").indexOf("field-valor-hora"), b ? calcularValorHora() : calcularValorProjeto()
  })
});