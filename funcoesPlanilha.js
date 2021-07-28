function togglePlanilha()
{
    let resposta = true;
    if (document.getElementById("planilhaTable").classList.contains("hidden"))
    {
        resposta = confirm("Tem certeza de que quer ver a planilha bem grande? ela é bem grande!!")
    }
    if(!resposta) return;
    
    document.getElementById("planilhaTable").classList.toggle("hidden");
}

