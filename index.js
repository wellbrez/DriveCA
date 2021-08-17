const Planilha = [];

fetch(
  "https://spreadsheets.google.com/feeds/list/1zQlECCi0lONoDG794Q4E5pDeL0d5DqKw3sQEkjYdSd8/onlvse5/public/values?alt=json"
)
  .then((response) => response.json())
  .then((resposta) => {
    let data = resposta.feed.entry;
    console.log(data);
    let i;
    for (i = 0; i < data.length; i++) {
      const materia = data[i]["gsx$matéria"]["$t"];
      const descricao = data[i]["gsx$descriçãocurtadomaterialenviado"]["$t"];
      const tipoDeArquivo = data[i]["gsx$tipodearquivo"]["$t"];
      const urlArquivo = data[i]["gsx$envieoarquivoaqui"]["$t"];
      const periodo = data[i]["gsx$dataemqueomaterialfoidisponibilizado"]["$t"];
      const dataEnvio = data[i]["gsx$carimbodedatahora"]["$t"];
      const nomeDaOptativa =
        data[i][
          "gsx$nomedamatériaapenassenãoestiverpresentenalistaacimaoptativaseoutras"
        ]["$t"];

      Planilha.push({
        materia,
        tipoDeArquivo,
        urlArquivo,
        periodo,
        dataEnvio,
        nomeDaOptativa,
        descricao,
      });
    }
    popularTabela(Planilha, "planilha");
    console.log(pegaQtdEmUmaSemana());
    return;
  })
  .catch((error) => {
    window.alert(
      "Houve um erro com a obtenção de dados do drive. Tente reiniciar a página ou verifique sua conexão com a internet"
    );
  });

function popularTabela(Planilha, idElemento) {
  if (!Planilha) return;
  planilha = document.getElementById(idElemento);
  planilha.innerHTML =
    "<tr><th>Matéria</th><th>Período</th><th>Tipo de Arquivo</th><th>Link</th><th>Data de envio</th></tr>";
  for (let elm of Planilha) {
    let materia = elm.nomeDaOptativa ? elm.nomeDaOptativa : elm.materia;

    planilha.innerHTML += `<tr>
        <td>${materia}</td>
        <td>${elm.periodo}</td>
        <td>${elm.tipoDeArquivo}</td>
        <td>${transformarURLEmIcone(elm)}</td>
        <td>${elm.dataEnvio}</td>
        </tr>
        `;
  }
}
let linkDriveAntigo = document.getElementsByClassName("driveAntigo");
for (let link of linkDriveAntigo) {
  link.onclick = popupDriveAntigo;
}
function popupDriveAntigo() {
  alert(
    "Hey, se você achar o arquivo lá, faz upload nessa nova plataforma por favor!! Agradecemoss!"
  );
}
