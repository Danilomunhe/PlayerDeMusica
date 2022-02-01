let musicas = [
    {titulo:"Livin' on a prayer", artista: 'Bon Jovi', src:'MUSICAS/Bon Jovi - Livin_ On A Prayer (Official Music Video)(MP3_70K)_1.mp3', img:'IMG/bonJovi.jpg'},
    {titulo:"Malvadão 2", artista: 'Xamã', src:'MUSICAS/Xamã - Malvadão 2 (Prod. NeoBeats)(MP3_70K).mp3', img:'IMG/xama.jpg'},
    {titulo:"HB20", artista: 'L7nnon', src:'MUSICAS/L7NNON - HB20 -- (prod. Papatinho)(MP3_70K).mp3', img:'IMG/hb20.jpg'},
    {titulo:"Poesia Acústica 11", artista: 'L7NNON, CHRIS, Ryan SP, Lourena, Xamã, Azzy, Mc Poze, Cynthia Luz', src:'MUSICAS/Poesia Acústica _11 - Nada Mudou - L7NNON_ CHRIS_ Ryan SP_ Lourena_ Xamã_ Azzy_ Mc Poze_ Cynthia Luz(MP3_70K).mp3', img:'IMG/p11.jpg'}
];

let musica = document.querySelector('audio');
let duracaoMusica = document.getElementById('fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let NomeArtista = document.querySelector('.descricao i')
let indexMusica = 0;

reiderizarMusica(indexMusica)

//Chamando função para pegar o click do botão e tocar música
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

//Chamando função para pegar o click do botão e pausar música
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

//Evento para acompanhar o progresso da música
musica.addEventListener('timeupdate', atualizarBarra);

//Evento das setas
document.querySelector('.anterior').addEventListener('click', ()=>{
    indexMusica--;
    if(indexMusica < 0)
        indexMusica = 3;
    reiderizarMusica(indexMusica)
});

document.querySelector('.proxima').addEventListener('click', ()=>{
    indexMusica++;
    if(indexMusica > 3)
        indexMusica = 0;
    reiderizarMusica(indexMusica)
});

//Funções
function reiderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', ()=>{
        nomeMusica.textContent = musicas[index].titulo;
        NomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    })
}
function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display='block';
    document.querySelector('.botao-play').style.display='none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display='none';
    document.querySelector('.botao-play').style.display='block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    //Mudando a altura da barra com currentTime que informa quanto de música foi tocada
    //E com duration que informe o tempo da música
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'

    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    //Transformando minutos em segundos
    let campoMinutos = Math.floor(segundos/60)
    //Exibindo os segundos
    let campoSegundos = segundos % 60;

    //Condição criada para mostrar o 0 antes de um número que só tenha um algarismo
    if(campoSegundos < 10)
    campoSegundos = '0'+campoSegundos;

    return campoMinutos+':'+campoSegundos 
}

