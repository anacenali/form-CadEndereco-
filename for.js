'use strict'; // Modo restrito
// Esse modo faz com que o javaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
// *Consumos de API - https://viacep.com.br/* -> Site que usamos 

//Função para limpar o formulário 
const limparFormulário = () =>{
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('Localidade').value = '';
    document.getElementById('UF').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('complemento').value = '';
}

// cria expressão regular 
// const cria uma variavel constante, onde o vaor é fixo  
// o test faz a verificação se os números digitados estão entre 0 e 9 
const eNumero = (numero) => /^[0-9]+$/.test(numero); 

// length é uma propriedade que identifica a quantidade de caracteres dentro do argumento cep
// o operador && retorna true, se estiver com 8 números e dentro de 0 e 9 é true, caso contrário, false 
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Função para preencher formulários com campos da API (interfacede de programção de aplicação)
const preencherFomulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro
    document.getElementById('Localidade').value = endereco.Localidade;
    document.getElementById('UF').value = endereco.UF;
    document.getElementById('bairro').value = endereco.bairro;
}