var proximaImagem = 1;
var zIndexAtual = 0;
var imagens = document.getElementById("carusel").children;

function avancarImagem(){
    imagem = imagens[proximaImagem];
    imagem.style.zIndex = ++zIndexAtual;
    imagem.style.marginLeft = "0%"

proximaImagem++;

if(proximaImagem >= imagens.length){
    proximaImagem = 0;
}

setTimeout(resetarImagens, 500);
}

function resetarImagens(){
    imagemVisivel = proximaImagem -1;

    if(imagemVisivel < 0){
        
        imagemVisivel = imagens.length - 1;
    }

    for(var i = 0; i < imagens.length; i++){
        if(i != imagemVisivel){
            imagens[i].style.marginLeft = "100%";
        }
    }
        }
    var intervalo = setInterval(avancarImagem, 2000);


var ul = document.querySelector('.head ul');
var menuBtn = document.querySelector('.bar i ')

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}




