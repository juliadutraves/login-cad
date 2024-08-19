// FUNÇÃO PARA VALIDAR ACESSO NA TELA DE LOGIN
function acessar(){
    // Obtém o valor dos campos de e-mail e senha do formulário
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // Verifica se ambos os campos foram preenchidos
    if(!loginEmail || !loginSenha){
        // Se algum campo estiver vazio, exibe um alerta
        alert("Favor preencher todos os campos");
    }else{
        // Se ambos os campos estiverem preenchidos, redireciona para a página de cadastro
        window.location.href ='cadastro.html';
    }
}

// DECLARAÇÃO DE VARIÁVEIS GLOBAIS
var dadosLista = []; // Array que armazena os nomes dos usuários
var salvaEmail = []; // Array que armazena os e-mails dos usuários

// FUNÇÃO PARA SALVAR USUÁRIO
function salvarUser(){
    // Obtém os valores dos campos de nome e e-mail do formulário
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;

    // Verifica se ambos os campos foram preenchidos
    if(nomeUser && emailUser){
        // Adiciona o nome e e-mail 
        dadosLista.push(nomeUser);
        salvaEmail.push(emailUser);

        // Cria a lista atualizada na tabela
        criaLista();
        
        // Limpa os campos de entrada
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
    }else{
        // Se algum campo estiver vazio, exibe um alerta
        alert("Favor preencher todos campos!");
    }
}

// FUNÇÃO PARA CRIAR A LISTA NA TABELA
function criaLista(){
    // Inicializa a tabela com o cabeçalho
    let table = document.getElementById('table').innerHTML = "<tr><th>Nome Usuário</th><th>E-mail</th><th>Ações</th></tr>";

    // Adiciona as linhas com os dados dos usuários
    for(let i = 0; i <= (dadosLista.length-1); i++){
        // Adiciona uma nova linha com os dados e botões para editar e excluir
        table += "<tr><td>" + dadosLista[i] + "</td><td>" + salvaEmail[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button id='btnaltera' type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        // Atualiza o conteúdo da tabela
        document.getElementById('table').innerHTML = table;
    }
}

// FUNÇÃO PARA EDITAR NOMES E E-MAILS DA LISTA
function editar(i){
    // Preenche os campos de entrada com os dados selecionados
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    document.getElementById('emailUser').value = salvaEmail[(i - 1)];
    
    // Remove o item da lista de dados e e-mails
    dadosLista.splice((i - 1), 1);
    salvaEmail.splice((i - 1), 1);
}

// FUNÇÃO PARA EXCLUIR NOME E E-MAIL DA LISTA
function excluir(i){
    // Remove o item da lista de dados e e-mails
    dadosLista.splice((i - 1), 1);
    salvaEmail.splice((i - 1), 1);
    
    // Remove a linha correspondente da tabela
    document.getElementById('table').deleteRow(i - 1);
}
