// acessar a página de cadastro após verificar os campos de login
function acessar() {
    // Obtém o valor dos campos de entrada de e-mail e senha
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
    
    // Verifica se ambos os campos foram preenchidos
    if (!loginEmail || !loginSenha) {
        // Exibe um alerta se algum dos campos estiver vazio
        alert("Favor preencher todos os campos");
    } else {
        // Redireciona para a página de cadastro se os campos estiverem preenchidos
        window.location.href = 'cadastro.html';
    }
}

// armazenar os nomes dos usuários
var dadosLista = [];

// Função para salvar o nome do usuário e atualizar a lista na tela
function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;

    // Verifica se o campo não está vazio
    if (nomeUser) {
        // Adiciona o nome ao dadosLista
        dadosLista.push(nomeUser);
        // Atualiza a lista exibida na tela
        criaLista();
        // Limpa o campo de entrada após o salvamento
        document.getElementById('nomeUser').value = "";

    } else {
        // Exibe um alerta se o campo estiver vazio
        alert("Favor informar o nome para cadastro");
    }
}

// Função para criar e atualizar a lista de usuários na tabela
function criaLista() {
    // Inicia a tabela com o cabeçalho
    let table = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    
    // Itera sobre o array dadosLista e adiciona cada nome à tabela
    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        // Adiciona uma linha para cada nome com um botão para editar e excluir
        table += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>excluir</button></td></tr>";
        // Atualiza o conteúdo da tabela na página
        document.getElementById('table').innerHTML = table;
    }
}

function editar(i) {
    // Define o valor do campo de entrada para o nome selecionado
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    // Remove o nome do array dadosLista
    dadosLista.splice(dadosLista[(i - 1)], 1);
}

// FUNÇÃO PARA EXCLUIR NOME DA LISTA 
// Remove um item da lista dadosLista
function excluir(i){
    // comentarios sobre splice
    dadosLista.splice((i-1), 1);
    document.getElementById('table').deleteRow(i);
}