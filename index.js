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
      const nomeDaOptativa = data[i]["gsx$nomedamatériaapenassenãoestiverpresentenalistaacimaoptativaseoutras"]["$t"]
      
      Planilha.push({materia,tipoDeArquivo,urlArquivo,periodo,dataEnvio,nomeDaOptativa})
    }
    popularTabela(Planilha,"planilha");
  }
  if(this.readyState==4 && this.status!=200)
  {
    window.alert("Houve um erro com a obtenção de dados do drive. Tente reiniciar a página ou verifique sua conexão com a internet");
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1zQlECCi0lONoDG794Q4E5pDeL0d5DqKw3sQEkjYdSd8/onlvse5/public/values?alt=json",
  true
);
xmlhttp.send();


function popularTabela(Planilha,idElemento)
{
    if(!Planilha)return;
    planilha = document.getElementById(idElemento);
    planilha.innerHTML = "<tr><th>Matéria</th><th>Período</th><th>Tipo de Arquivo</th><th>Link</th><th>Data de envio</th></tr>";
    for(let elm of Planilha)
    {
      let materia = (elm.nomeDaOptativa)?elm.nomeDaOptativa:elm.materia;

        planilha.innerHTML+=`<tr>
        <td>${materia}</td>
        <td>${elm.periodo}</td>
        <td>${elm.tipoDeArquivo}</td>
        <td>${transformarURLEmIcone(elm.urlArquivo)}</td>
        <td>${elm.dataEnvio}</td>
        </tr>
        `
    }
}