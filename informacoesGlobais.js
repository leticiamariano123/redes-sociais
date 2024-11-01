const url=‘https://raw.githubusercontent.com/s.jsoguilhermeonrails/api/main/dados-globain’

async function visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados);
}

visualizarInformacoesGlobais ()
