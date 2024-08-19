# login-cad

## Indice
* [Projeto de gerenciamento de usuários](#projeto-de-gerenciamento-de-usuários)
* [Fotos do projeto](#fotos-do-projeto)
* [Funcionalidades](#funcionalidades)
* [Como usar](#como-usar)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Logica do JavaScript](#lógica-do-javascript)
* [Fontes](#fontes)
* [Atualização](#atualizacao)
* [Principais Melhorias](#principais-melhorias)
* [Fotos da atualização](#fotos-da-atualização)

# Projeto de Gerenciamento de Usuários
 
Este projeto é uma aplicação web simples que permite armazenar nomes de usuários em um array. A interface de usuário consiste em um formulário para adicionar nomes e uma tabela que exibe todos os nomes armazenados. É ideal para entender conceitos básicos de manipulação de DOM, arrays, e armazenamento local em JavaScript.

## Fotos do projeto 

![tela-logincad](https://github.com/user-attachments/assets/295611d6-17a8-425d-8777-a70b63280063)
 
## Funcionalidades
 
- **Adicionar Usuário**: Um formulário simples permite que o usuário insira um nome, que é então armazenado em um array.
- **Listar Usuários**: Os nomes inseridos são exibidos em uma tabela abaixo do formulário.
- **Salvar Dados**: Os dados podem ser salvos na memória do navegador usando JavaScript.
 
## Como Usar
- No campo de entrada, digite o nome do usuário que deseja adicionar.
- O nome será exibido na tebela abaixo do formulário.

## Tecnologias Utilizadas
 
- **HTML5**: Para estruturação da página.
- **CSS3**: Para estilização da interface.
- **JavaScript**: Armazenamento de dados em um array.
- **Bootstrap 5**: Para estilização adicional e layout responsivo.
 
## Lógica do JavaScript
 
- **`salvarUser()`**: Esta função é chamada quando o usuário clica no botão "Salvar". Ela coleta o nome digitado no campo de entrada, o adiciona ao array e atualiza a tabela com a lista de usuários.

- **`Splice()`** Altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
 
## Fontes 
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

# Atualização 

Nesta atualização, foi adicionado um campo de entrada para o e-mail dos usuários, complementando o sistema de cadastro que anteriormente registrava apenas o nome dos usuários. Essa mudança permite um gerenciamento mais completo.

## Principais Melhorias:
 
**Campo de E-mail**:
   - **Novo Campo de Entrada**: Agora, além do nome, o usuário pode inserir seu e-mail, o que expande as possibilidades de uso do sistema.
   - **Validação**: Foi adicionado suporte para validar se os campos de nome e e-mail estão preenchidos antes de permitir o cadastro, garantindo que ambos os dados sejam fornecidos.

## Fotos da atualização

![telacadastro](https://github.com/user-attachments/assets/445458a5-e60d-4d9f-9510-98571cb268b0)

