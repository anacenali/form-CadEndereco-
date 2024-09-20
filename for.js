'use strict'; // Modo restrito
// Esse modo faz com que o javaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
// *Consumos de API - https://viacep.com.br/* 

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
const eNumero = (numero) => /^[0-9]+$/.test(numero); 
