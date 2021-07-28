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