// Armazenar os dados dos usuários como um array de objetos
var dadosLista = [];
 
// Função para salvar o nome e o e-mail do usuário e atualizar a lista na tela
function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;
 
    // Verifica se os campos não estão vazios
    if (nomeUser && emailUser) {
        // Adiciona um objeto com o nome e e-mail ao dadosLista
        dadosLista.push({ nome: nomeUser, email: emailUser });
        
        // Atualiza a lista exibida na tela
        criaLista();
        
        // Limpa os campos de entrada após o salvamento
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
    } else {
        // Exibe um alerta se algum dos campos estiver vazio
        alert("Favor informar o nome e o e-mail para cadastro");
    }
}
 
// Função para criar e atualizar a lista de usuários na tabela
function criaLista() {
    // Inicia a tabela com o cabeçalho
    let table = "<tr><th>Nome Usuário</th><th>E-mail</th><th>Ações</th></tr>";
    
    // Itera sobre o array e adiciona cada nome e e-mail à tabela
    for (let i = 0; i < dadosLista.length; i++) {
        table += "<tr><td>" + dadosLista[i].nome + "</td><td>" + dadosLista[i].email + "</td><td><button type='button' onclick='editar(" + i + ")'>Editar</button><button type='button' onclick='excluir(" + i + ")'>Excluir</button></td></tr>";
    }
    
    // Atualiza o conteúdo da tabela na página
    document.getElementById('table').innerHTML = table;
}
 
// Função para editar o nome e o e-mail de um usuário 
function editar(i) {
    // Define os valores dos campos de entrada para os dados selecionados
    document.getElementById('nomeUser').value = dadosLista[i].nome;
    document.getElementById('emailUser').value = dadosLista[i].email;
    
    // Remove o item 
    dadosLista.splice(i, 1);
    
    // Atualiza a lista exibida na tela
    criaLista();
}
 
// Função para excluir um usuário 
function excluir(i) {
    // Remove o item 
    dadosLista.splice(i, 1);
    
    // Remove a linha da tabela correspondente
    document.getElementById('table').deleteRow(i + 1);
}