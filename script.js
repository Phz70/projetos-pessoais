function validarForm() {
    // Resetando mensagens de erro
    resetarMensagens();

    // Pegando valores dos campos
    let nome = document.getElementById('nome').value.trim();
    let dataNascimento = document.getElementById('dataNascimento').value.trim();
    let sexo = document.querySelector('input[name="sexo"]:checked');
    let nomeMaterno = document.getElementById('nomeMaterno').value.trim();
    let cpf = document.getElementById('cpf').value.trim();
    let telefoneCelular = document.getElementById('telefoneCelular').value.trim();
    let telefoneFixo = document.getElementById('telefoneFixo').value.trim();
    let endereco = document.getElementById('endereco').value.trim();
    let login = document.getElementById('login').value.trim();
    let senha = document.getElementById('senha').value.trim();
    let confirmarSenha = document.getElementById('confirmarSenha').value.trim();

    // Validando campos obrigatórios
    if (nome === '' || dataNascimento === '' || !sexo || nomeMaterno === '' || cpf === '' || telefoneCelular === '' || telefoneFixo === '' || endereco === '' || login === '' || senha === '' || confirmarSenha === '') {
        exibirMensagem('Preencha todos os campos.', 'erro');
        return false;
    }

    // Validando tamanho do nome
    if (nome.length < 15 || nome.length > 60) {
        exibirMensagem('O nome deve ter entre 15 e 60 caracteres.', 'erro');
        return false;
    }

    // Validando formato dos telefones
    if (!telefoneCelular.match(/^\(\d{2}\)\d{5}-\d{4}$/) || !telefoneFixo.match(/^\(\d{2}\)\d{4}-\d{4}$/)) {
        exibirMensagem('Formato inválido para telefone celular ou telefone fixo.', 'erro');
        return false;
    }

    // Validando tamanho do login
    if (login.length !== 6 || !login.match(/^[a-zA-Z]{6}$/)) {
        exibirMensagem('O login deve ter exatamente 6 caracteres alfabéticos.', 'erro');
        return false;
    }

    // Validando tamanho da senha
    if (senha.length !== 8 || !senha.match(/^[a-zA-Z0-9]{8}$/)) {
        exibirMensagem('A senha deve ter exatamente 8 caracteres alfanuméricos.', 'erro');
        return false;
    }

    // Comparando senha e confirmação de senha
    if (senha !== confirmarSenha) {
        exibirMensagem('As senhas não coincidem.', 'erro');
        return false;
    }

    // Se passou por todas as validações, mostrar mensagem de sucesso
    exibirMensagem('Cadastro realizado com sucesso!', 'sucesso');

    // Armazenar dados no localStorage (simulando armazenamento)
    let usuario = {
        nome: nome,
        login: login,
        senha: senha,
        dataNascimento: dataNascimento,
        cpf: cpf,
        telefoneCelular: telefoneCelular,
        telefoneFixo: telefoneFixo,
        sexo: sexo,
        nomeMaterno: nomeMaterno,
        endereco: endereco

    };
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redirecionar para tela de login após 1.5 segundos
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 1500);

    return false; // Evitar o envio do formulário
}

function exibirMensagem(mensagem, tipo) {
    let mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.textContent = mensagem;
    mensagemDiv.style.display = 'block';
    mensagemDiv.className = `mensagem mensagem-${tipo}`;

    // Esconder mensagem após 3 segundos
    setTimeout(function() {
        mensagemDiv.style.display = 'none';
    }, 3000);
}

function resetarMensagens() {
    document.getElementById('mensagem').style.display = 'none';
}
function validarLogin() {
    // Resetando mensagens de erro
    resetarMensagens();

    // Pegando valores dos campos
    let login = document.getElementById('login').value.trim();
    let senha = document.getElementById('senha').value.trim();

    // Simulação de verificação de login e senha (pode ser substituído por lógica real)
    let usuarioArmazenado = localStorage.getItem('usuario');
    if (usuarioArmazenado) {
        let usuario = JSON.parse(usuarioArmazenado);
        if (login === usuario.login && senha === usuario.senha) {
            exibirMensagem('Login realizado com sucesso!', 'sucesso');

            // Redirecionar para tela principal após 1.5 segundos
            setTimeout(function() {
                window.location.href = 'principal.html';
            }, 1500);

            return false; // Evitar o envio do formulário
        }
    }

    // Se chegou aqui, login ou senha incorretos
    exibirMensagem('Login ou senha incorretos. Tente novamente.', 'erro');
    return false;
}
