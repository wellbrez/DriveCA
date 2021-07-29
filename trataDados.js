function transformarURLEmIcone(conjuntoURL)
{
    const urls = conjuntoURL.split('https://');
    let textofinal = "";
    caminhoIMG = (urls.length>2)?"random.png":"pdf.jpg";
    let img = `<img class=btnDownload src="${caminhoIMG}">`
    for(let url of urls)
    {
        if(!url)continue
        url = "https://"+url;
        textofinal+=`<a href=${url}>${img}</a>`
    }
    return textofinal;
}

function pegaQtdEmUmaSemana()
{
    let contador=0;
    let contadorTotal =0;
    for(let elm of Planilha)
    {
        const dataDia = Number(elm.dataEnvio.split(' ')[0].split('/')[0]);
        const dataMes = Number(elm.dataEnvio.split(' ')[0].split('/')[1]);
        const dataAno = Number(elm.dataEnvio.split(' ')[0].split('/')[2]);
        const dataToda = new Date(dataAno,dataMes-1,dataDia);
        const dataAgora = new Date();
        const diferencaData = (dataAgora.getTime() - dataToda.getTime())
        const diferencaEmDias = Math.floor(diferencaData/1000/60/60/24);
        if(diferencaEmDias<7)
        {
            contador++
            
        }
        contadorTotal++
    }
    document.getElementById("bar2").style.maxWidth= `${contador}vw`;
    document.getElementsByTagName("aes")[0].innerHTML = " "+contador;
    document.getElementsByTagName("tta")[0].innerHTML = " "+contadorTotal;
    return contador;

}
