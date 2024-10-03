'use strict'; // Modo restrito
// Esse modo faz com que o javaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
// *Consumos de API - https://viacep.com.br/* -> Site que usamos 

//Função para limpar o formulário 
const limparFormulário = () => {
    document.getElementById('Logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('Localidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('numero').value = '';
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
const preencherFormulario = (endereco) => {
    document.getElementById('Logradouro').value = endereco.logradouro
    document.getElementById('Localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
    document.getElementById('bairro').value = endereco.bairro;
}
// função de consumo de API viaCep

// explicar dps
const pesquisarCep = async () => {
    limparFormulário();
    const url = `https://viacep.com.br/ws/${CEP.value}/json/`;
    if (cepValido(CEP.value)) {
        const dados = await fetch(url);
        // A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede. 
        const addres = await dados.json();
        // O operador await é utilizado para esperar por uma Promise. Ele pode ser usado apenas dentro de uma async function.

        // O método hasOwnProperty() retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).
        if (addres.hasOwnProperty("erro")) {
            alert("Cep não encontrado");
        } else {
            preencherFormulario(addres);
        }
    } else {
        alert("CEP incorreto!");
    }
};
//adiciona escutador para executar consumo de API da ViaCep
// addEventListener() registra uma única espera de evento em um único alvo. O alvo do evento pode ser um único elemento em um documento, o documento em si, uma janela, ou um XMLHttpRequest.
document.getElementById("CEP").addEventListener("focusout", pesquisarCep);
// O evento focusout é acionado assim que o elemento perde o foco. A principal diferença entre esse evento e o evento blur, é que esse ultimo não gera "borbulhas".