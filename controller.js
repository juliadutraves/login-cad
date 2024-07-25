function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }else{
       // alert("campos preenchidos com sucesso")
       window.location.href = 'cadastro.html';
    }
    }

    //FUNÇÃO QUE ARMAZENA EM ARREY NOME NA TELA DE CADASTRO

    var dadosLista = [];
    function salvarUser(){
        let nomeUser = document.getElementById('nomeUser').value;

        if(nomeUser){
            dadosLista.push(nomeUser);
            console.log(dadosLista);
            document.getElementById('nomeUser').value = "";

        }else{
            alert("Favor informar o nome para cadastro");
    }
}

