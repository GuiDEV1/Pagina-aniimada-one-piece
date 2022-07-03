// Script criado para transição de videos.
// Autor: Guilherme M.Dias.
// Data: 02 de julho 2022.
// versão: 1.0.

var i = 0;
const video = ['sanji.mp4','zoro.mp4','luffy.mp4','kaido.mp4',];
const vid = document.querySelector('#vid');
const parag = document.querySelector('#parag');
const ex = document.querySelector('#ex');
var tempo = 15;
// ex.addEventListener("click", tempo());

function mudar() {
    vid.src = "./videos/" + video[i];
    parag.innerHTML = 'Video: <b>' + video[i] + '<b>';
    i++;
    if (i == video.length) {i = 0}
    setTimeout(function () { mudar() }, tempo * 800);

}
mudar();
