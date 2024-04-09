var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados"); 
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var logradouro = document.getElementById("logradouro");
var número = document.getElementById("número");
var complemento = document.getElementById("complemento");
var bairro= document.getElementById("bairro");
var cidade= document.getElementById("cidade");
var cidade= document.getElementById("cidade");
var estado= document.getElementById("estado");

 
function alertar(event){
    //alert("Voce clicou no botão!!!!" + event);
    
    const url = `http://viacep.com.br/ws/${cep.value}/json`;
    fetch(url)
    .then(resposta=>resposta.json())
    .then(dados=>alert(dados.bairro)) 

    
    saida.innerText = "Nome: " + nome.value + 
        "\n Email: " + email.value + 
        "\n Telefone: " + telefone.value + 
        "\n CEP: " + CEP.value + 
        "\n Logradouro: " + logradouro.value +
        "\n Número: " + número.value + 
        "\n Complemento: " + complemento.value + 
        "\n Bairro: " + bairro.value + 
        "\n Cidade: " + cidade.value + 
        "\n Estado: " + estado.value;
        
} 