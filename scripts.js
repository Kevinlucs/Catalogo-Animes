let animes = [
    {
        titulo: "Naruto",
        capa: "https://br.web.img3.acsta.net/c_310_420/pictures/16/04/11/16/56/089875.jpg",
    },
    {
        titulo: "Jujutsu Kaisen",
        capa: "https://m.media-amazon.com/images/I/71PBZJaSmAL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        titulo: "Hunter x Hunter",
        capa: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpe",
    },
];

//inicializa a lista (array).
document.addEventListener("DOMContentLoaded", function () {
    // Chama a função para inicializar a lista de animes
    atualizarListaAnimes();
});

function adicionarAnime() {
    //pega os valores inseridos (nome e a url da imagem) e salva.
    var tituloAnime = document.getElementById("tituloAnime").value;
    var bannerAnime = document.getElementById("bannerAnime").value;

    // Variavel para inserir na lista os filmes, seguindo o padrão de titulo e banner.
    var novoAnime = {
        titulo: tituloAnime,
        capa: bannerAnime,
    };

    // Adicionar o novo anime na lista (array).
    animes.push(novoAnime);

    //limpa os campos
    document.getElementById("tituloAnime").value = "";
    document.getElementById("bannerAnime").value = "";

    // Atualiza a exibição dos animes na tela.
    atualizarListaAnimes();
}

function atualizarListaAnimes() {
    var elementoListaAnimes = document.getElementById("listaAnimes");

    // Limpa o conteúdo existente na caixa da URL da imagem.
    elementoListaAnimes.innerHTML = "";

    // Iterar sobre o array de animes e adicionar HTML dinamicamente
    for (var i = 0; i < animes.length; i++) {
        elementoListaAnimes.innerHTML += `<div id="titulo"> <img src="${animes[i].capa}" alt="${animes[i].titulo}"> ${animes[i].titulo} </div>`;
    }
}
