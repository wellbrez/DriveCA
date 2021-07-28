function togglePlanilha(idPlanilha)
{
    let resposta = true;
    if (document.getElementById(idPlanilha).classList.contains("hidden") && idPlanilha == 'planilhaTable')
    {
        resposta = confirm("Tem certeza de que quer ver a planilha bem grande? ela é bem grande!!")
    }
    if(!resposta) return;
    
    document.getElementById(idPlanilha).classList.toggle("hidden");
}

