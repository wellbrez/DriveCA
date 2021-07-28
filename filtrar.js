
function ElementoFiltro(Materia, Periodo,TipoDeArquivo)
{
    this.Materia = Materia;
    this.Periodo = Periodo;
    this.TipoDeArquivo = TipoDeArquivo;

    this.filtrosPresentes = [];
    this.verificarFiltrosPresentes = function()
    {
        if(this.Materia) {this.filtrosPresentes.push(this.Materia)}
        if(this.Periodo) {this.filtrosPresentes.push(this.Periodo)}
        if(this.TipoDeArquivo) {this.filtrosPresentes.push(this.TipoDeArquivo)}
    }
}

function filtrarTabela(elementoFiltro,tabela)
{
    const novaTabela = [];
    const filtrarPorMateria = (elementoFiltro.Materia)
    const filtrarPorPeriodo = (elementoFiltro.Periodo)
    const filtrarPorTipo = (elementoFiltro.TipoDeArquivo)
    
    for(let elemento of tabela)
    {
        let passou = true;
        if(filtrarPorMateria)
        {
            if(elementoFiltro.Materia!=elemento.materia)
            {
                passou = false;
            }
        }
        if(filtrarPorPeriodo)
        {
            if(elementoFiltro.Periodo!=elemento.periodo)
            {
                passou = false;
            }
        }
        if(filtrarPorTipo)
        {
            if(elementoFiltro.TipoDeArquivo!=elemento.tipoDeArquivo)
            {
                passou = false;
            }
        }
        if(passou)
        {
            novaTabela.push(elemento);
        }
    }
    return novaTabela;
}

const botaoPesquisar = document.getElementById("pesquisar");
botaoPesquisar.addEventListener('click',function()
{
    const filtroMateria = document.getElementById("materia").value;
    const filtroPeriodo = document.getElementById("periodo").value;
    const filtroTipoDeDoc = document.getElementById("tipodedoc").value;
    console.log(filtroMateria);
    const elementoFiltro = new ElementoFiltro(filtroMateria,filtroPeriodo,filtroTipoDeDoc);
    const tabelaFiltrada = filtrarTabela(elementoFiltro,Planilha);
    popularTabela(tabelaFiltrada,"planilhaFiltrada");
    //togglePlanilha('planilhaTableFiltrada');
    
})