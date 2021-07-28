const Planilha = [];

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;
    let i;
    for (i = 0; i < data.length; i++) {
      const materia = data[i]["gsx$matéria"]["$t"];
      const tipoDeArquivo = data[i]["gsx$tipodearquivo"]["$t"];
      const urlArquivo = data[i]["gsx$envieoarquivoaqui"]["$t"];
      const periodo = data[i]["gsx$dataemqueomaterialfoidisponibilizado"]["$t"]
      const dataEnvio = data[i]["gsx$carimbodedatahora"]["$t"]
      Planilha.push({materia,tipoDeArquivo,urlArquivo,periodo,dataEnvio})
    }
    popularTabela();
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1zQlECCi0lONoDG794Q4E5pDeL0d5DqKw3sQEkjYdSd8/onlvse5/public/values?alt=json",
  true
);
xmlhttp.send();

function popularTabela()
{
    planilha = document.getElementById('planilha');
    for(let elm of Planilha)
    {
        planilha.innerHTML+=`<tr>
        <td>${elm.materia}</td>
        <td>${elm.periodo}</td>
        <td>${elm.tipoDeArquivo}</td>
        <td>${transformarURLEmIcone(elm.urlArquivo)}</td>
        <td>${elm.dataEnvio}</td>
        </tr>
        `
    }
}