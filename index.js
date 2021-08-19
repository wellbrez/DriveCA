const Planilha = [];
fetch("https://api.apispreadsheets.com/data/17100/")
  .then((response) => response.json())
  .then((resposta) => {
    console.log(resposta);
    let data = resposta.data;
    let i;
    for (i = 0; i < data.length; i++) {
      const materia = data[i]["Matéria"];
      const descricao = data[i]["Descrição curta do material enviado"];
      const tipoDeArquivo = data[i]["Tipo de Arquivo"];
      const urlArquivo = data[i]["Envie o arquivo aqui"];
      const periodo = data[i]["Data em que o material foi disponibilizado"];
      const dataEnvio = data[i]["Carimbo de data/hora"];
      const nomeDaOptativa =
        data[i][
          "Nome da matéria (apenas se não estiver presente na lista acima) (optativas e outras)"
        ];

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
    pegaQtdEmUmaSemana();
    return;
  })
  .catch((error) => {
    document.querySelector("error").classList.remove("hidden");
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
