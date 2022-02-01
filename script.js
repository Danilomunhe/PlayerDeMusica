let musica = document.querySelector('audio');

let duracaoMusica = document.getElementById('fim');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//Chamando função para pegar o click do botão e tocar música
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

//Chamando função para pegar o click do botão e pausar música
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

//Evento para acompanhar o progresso da música
musica.addEventListener('timeupdate', atualizarBarra);

//Funções
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