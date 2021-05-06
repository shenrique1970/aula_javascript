//document.getElementById('exemplo').innerHTML = "<button>botão</button>"; //pegue o o elemento pelo id
//document.getElementsByClassName('lista')[1].innerHTML = 'item alterado'; //pegue os elementos pela classe
//document.getElementsByTagName('button'); //pegue o elemento pelo tag
//document.getElementsByName('email'); //pegue o elemento pelo nome

//mais usado 
//document.querySelector('#exemplo');
//document.querySelector('.lista');
//document.querySelectorAll('.lista');
//document.querySelector('button');
//document.querySelector('button').innerHTML = 'Inscrito';
//document.querySelectorAll('.lista')[1].innerHTML = 'item alterado';

function verde() {
    document.querySelector('#exemplo2').classList.remove('azul');
    document.querySelector('#exemplo2').classList.remove('vermelho');
    document.querySelector('#exemplo2').classList.add('verde');
}
function vermelho() {
    document.querySelector('#exemplo2').classList.remove('azul');
    document.querySelector('#exemplo2').classList.remove('verde');
    document.querySelector('#exemplo2').classList.add('vermelho');
}
function azul() {
    document.querySelector('#exemplo2').classList.remove('vermelho');
    document.querySelector('#exemplo2').classList.remove('verde');
    document.querySelector('#exemplo2').classList.add('azul');
}
function trocar() {
    if(document.querySelector('button').classList.contains('preto')) {
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('verde');
    } else {
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('preto');
    }
}