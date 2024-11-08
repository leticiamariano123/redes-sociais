const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
    const pessoasNoMundo = (dados.total_pessoas_mundo) /1e9
    const horas = parseInt (dados. tempo_medio)
    const minutos = Math. round ( (dados. tempo_medio - horas) *100)
    const porcentagem =

    const paragrafo = document.createElement ('p')
    paragrafo.classList.add('graficos-container_texto')

    paragrafo.innerHTML =`voce sabia que o mundo tem
    ‹span>${pessoasNoMundo} bilhões </span> de pessoas e que aproximadamente
    ‹span>${pessoasConectadas} bilhões </span> estão conectadas em alguma rede social e passam em média
    ‹span>${horas}</span> horas e ‹span>$ {minutos}</span> minutos conectadas.`
    <br> Isso significa que aproximadamente <span>${porcentagemConectada}%</span>
de pessoas estao co

    const container = document.getElementById('geaficos-container')
    container.appendChild(paragrafo)
}

visualizarInformacoesGlobais()

    
