function botao() {
    alert("Obrigado por clicar!");
}

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</>";
}

function redirecionar() {
    window.open("https://digitalinnovation.one/"); //abre em outra janela
    //window.location.href = "https://digitalinnovation.one/"; //abre na mesma janela
}
function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //alert("Trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}




/*
var nome = prompt("Qual seu nome?");
var idade = prompt("Qual sua idade?");
var d = new Date();
alert(d.getMonth() + 1, "mostra o mes obs sempr + 1");


alert(nome + " tem " + idade + " anos");
if (idade >= 18) {
    alert("Maior de idade");
} else{
    alert("Menor de idade");
};

function soma(a, b) { //função soma
    return a+b
}
alert(soma(8, 19)); //passa os valores de a e b
*/
//var frase = "Brasil é o melhor time do mundo";
//var lista = ["Maça", "Pêra", "Uva"]
//var veiculo = {marca: "Ford", cor: "verde", ano: "2021"};
//console.log(nome, idade);
//console.log(frase);
//console.log(frase.replace("Brasil", "Espanha"));
//alert(frase.replace("espanha", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//console.log(lista);
//console.log()
//console.log(lista[2]);
//lista.pop();
//lista.push("Uva");
//console.log(lista.reverse(), "inverte a ordem da lista");
//console.log(lista.toString(), "imprima como uma string");
//console.log(lista.toString()[0], "imprime a a primeira letra da string");
//console.log(lista.join(" - "));
//console.log(veiculo, "Dicionário");