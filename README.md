# Form-CadEndereco 🗺️

## 📄 Descrição
 
 Este projeto foi feito durante as aulas de PWI, usamos código em JavaScript, html e css. O JavaScript implementa a funcionalidade de gerenciar a entrada de um CEP (Código de Endereçamento Postal) e interagir com uma API para recuperar informações sobre um endereço. O código HTML define uma página para cadastro de endereço, estruturada de maneira organizada e intuitiva. E o código CSS define estilos para um formulário, visando uma aparência moderna e responsiva. Este projeto permite ao usuário pesquisar e preencher automaticamente dados de endereço com base no CEP fornecido. Ele utiliza a API pública ViaCEP para obter informações sobre o endereço.

 ## Funcionalidades 

 * Validação de CEP: Verifica se o CEP digitado possui 8 dígitos numéricos.
 * Consumo de API: Realiza uma requisição para a API ViaCEP, recuperando informações como logradouro, bairro, cidade e estado.
 * Preenchimento automático: Preenche os campos do formulário com os dados obtidos da API.

 ## Tecnologias utilizadas 

 * HTML
 * CSS
 * JavaScript (ES6)

 ## Estrutura do Código

### JavaScript
* Modo Estrito: O código é executado em modo estrito ('use strict'), o que ajuda a evitar erros comuns e a garantir uma programação mais segura.
* Funções principais:
  * limparFormulário(): Limpa todos os campos do formulário.
  * eNumero(numero): Verifica se a entrada é um número.
  * cepValido(cep): Valida se o CEP tem 8 dígitos e se é numérico.
  * preencherFormulario(endereco): Preenche os campos do formulário com os dados retornados pela API.
  * pesquisarCep(): Função assíncrona que consome a API ViaCEP e preenche o formulário ou exibe um alerta se o CEP não for encontrado.

  ### HTML 

 * Um formulário simples que coleta informações de endereço.
 * Campos para inserir o CEP, logradouro, número, complemento, bairro, cidade e estado.
 * Um botão de submissão para enviar os dados.

 ## Como usar 

 1. Clone o repositório ou faça o download dos arquivos.
 2. Abra o arquivo index.html em um navegador web.
 3. Digite um CEP válido no campo correspondente e pressione Tab ou clique fora do campo para ativar a pesquisa.
 4. Os campos de endereço serão preenchidos automaticamente com os dados correspondentes ao CEP inserido.