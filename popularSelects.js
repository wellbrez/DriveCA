let Materias = [
    "",
    "----- PERÍODO: 1 -----",
    "Introdução à Engenharia Civil",
    "Programação Básica de Computadores",
    "Cálculo I",
    "Álgebra Linear",
    "Química A",
    "----- PERÍODO: 2 -----",
    " Ciência dos Materiais",
    "Expressão Gráfica",
    "Mecânica dos Sólidos",
    "Geomática Aplicada à Engenharia",
    "Introdução à Mecânica",
    "Cálculo II",
    "----- PERÍODO: 3 -----",
    "Análise Estrutural I",
    "Elementos de Arquitetura",
    "Mecânica dos Sólidos II",
    "Eletricidade Aplicada",
    "Cálculo III_B",
    "Termodinâmica e Transmissão de Calor",
    "Probabilidade e Estatística",
    "----- PERÍODO: 4 -----",
    "Materiais de Construção Civil I",
    "Mecânica dos Sólidos III",
    "Mecânica dos Fluidos",
    "Instalações Elétricas Prediais",
    "Técnicas e Economia dos Transportes",
    "Física Experimental",
    "Algoritmos Numéricos I",
    "----- PERÍODO: 5 -----",
    "Análise Estrutural II",
    "Geotécnica",
    "Laboratório de Materiais de Construção Civil",
    "Mecânica dos Sólidos IV",
    "Hidrologia",
    "Hidráulica",
    "Economia da Engenharia I",
    "----- PERÍODO: 6 -----",
    "Análise Estrutural III",
    "Mecânica dos Solos I",
    "Tecnologia da Construção Civil I",
    "Saneamento Básico",
    "Economia da Engenharia II",
    "Estradas de Rodagem",
    "----- PERÍODO: 7 -----",
    "Estruturas de Aço I",
    "Estruturas de Concreto I",
    "Estruturas de Madeira",
    "Laboratório de Mecânica dos Solos",
    "Mecânica dos Solos II",
    "Tecnologia da Construção Civil II",
    "Estradas de Ferro",
    "----- PERÍODO: 8 -----",
    "Estruturas de Aço II",
    "Estruturas de Concreto II",
    "Gerenciamento de Empreendimentos de Construção Civil I",
    "Higiene e Segurança do Trabalho",
    "Instalações Hidráulicas e Sanitárias Prediais",
    "Aspectos Legais e Éticos da Engenharia",
    "Organização Industrial",
    "----- PERÍODO: 9 -----",
    "Estruturas de Fundações",
    "Fundamentos da Engenharia Ambiental",
    "Optativas e outras matérias"
]
let TiposDeDoc = [
    "",
    "Livro",
    "P1",
    "P2",
    "P3",
    "P4+",
    "PF",
    "TRABALHO1",
    "TRABALHO2",
    "TRABALHO3+",
    "Lista",
    "Outros"
]
let Periodos = [""];

let data = new Date()
const ano = data.getFullYear();
for(let i=2012;i<=ano;i++)
{
    Periodos.push(`${i}/1`);
    Periodos.push(`${i}/2`);
}


function popularSelect(idSelect,vetor)
{
    let select = document.getElementById(idSelect);
    for(let elm of vetor)
    {
        select.innerHTML+=`<option value='${elm}'>${elm}</option>`;
    }
}
popularSelect('materia',Materias);
popularSelect('periodo',Periodos);
popularSelect('tipodedoc',TiposDeDoc);