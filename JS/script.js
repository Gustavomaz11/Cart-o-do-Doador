// Verifica a página atual
const currentPage = window.location.pathname.split("/").pop();

// Definindo os botões com base na página
let entrar, registro, esqueceuSenha;

// Atribuindo botões de acordo com a página
if (currentPage === 'index.html' || currentPage === '') {
    entrar = document.querySelector('#entrar');  // Botão de acessar (navega para 'index.html')
    registro = document.querySelector('#registro');  // Botão de registro (navega para 'cadastroUsuario.html')
    esqueceuSenha = document.querySelector('#esqueceuSenha');  // Botão de "Esqueceu a Senha"
} else if (currentPage === 'cadastroUsuario.html') {
    entrar = document.querySelector('#entrar');  // Botão de acessar (navega para 'index.html')
    registro = document.querySelector('#registro');  // Botão de registro (navega para 'cadastroUsuario.html')
} else if (currentPage === 'esqueceuSenha.html') {
    entrar = document.querySelector('#entrar');  // Botão de acessar (navega para 'index.html')
}

// Definindo as URLs para redirecionamento
const urls = {
    index: 'index.html',
    cadastro: 'cadastroUsuario.html',
    esqueceuSenha: 'esqueceuSenha.html'
};

// Adiciona o evento de clique para o botão 'Acessar'
if (entrar) {
    entrar.addEventListener('click', () => {
        if (currentPage === 'cadastroUsuario.html' || currentPage === 'esqueceuSenha.html') {
            window.location.href = urls.index; // Redireciona para o index.html
        }
    });
}

// Adiciona o evento de clique para o botão 'Registrar'
if (registro) {
    registro.addEventListener('click', () => {
        if (currentPage === 'index.html' || currentPage === '') {
            window.location.href = urls.cadastro; // Redireciona para o cadastroUsuario.html
        }
    });
}

// Adiciona o evento de clique para o botão 'Esqueceu a Senha'
if (esqueceuSenha) {
    esqueceuSenha.addEventListener('click', () => {
        if (currentPage === 'index.html' || currentPage === '') {
            window.location.href = urls.esqueceuSenha; // Redireciona para o esqueceuSenha.html
        }
    });
}



particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#e41e26'
        },
        shape: {
            type: 'circle'
        },
        size: {
            value: 6,
            random: true
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#fff',
            opacity: 0.4,
            width: 1
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            }
        }
    }
});

function mascaraCPF(input) {
    let value = input.value.replace(/\D/g, ''); // Remove tudo que não for número
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o primeiro ponto
    value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o segundo ponto
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona o traço
    input.value = value;
}

// Configuração do verificador de senha
document.addEventListener('DOMContentLoaded', function() {
    const senhaInput = document.getElementById('senha');
    const senhaGroup = senhaInput.parentElement;
    const feedbackDiv = senhaGroup.querySelector('.password-feedback');

    senhaInput.addEventListener('input', function() {
        const senha = this.value;
        const forca = verificarForcaSenha(senha);
        
        // Remover classes anteriores
        senhaGroup.classList.remove('strength-weak', 'strength-medium', 'strength-strong');
        
        // Adicionar nova classe baseada na força
        if (senha.length > 0) {
            senhaGroup.classList.add(`strength-${forca.nivel}`);
        }

        // Atualizar feedback
        feedbackDiv.textContent = forca.mensagem;
    });
});

function verificarForcaSenha(senha) {
    let pontos = 0;
    let feedback = [];

    // Verificar comprimento
    if (senha.length >= 8) {
        pontos += 1;
    } else {
        feedback.push("Use pelo menos 8 caracteres");
    }

    // Verificar letras maiúsculas e minúsculas
    if (/[a-z]/.test(senha) && /[A-Z]/.test(senha)) {
        pontos += 1;
    } else {
        feedback.push("Use letras maiúsculas e minúsculas");
    }

    // Verificar números
    if (/\d/.test(senha)) {
        pontos += 1;
    } else {
        feedback.push("Use números");
    }

    // Verificar caracteres especiais
    if (/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
        pontos += 1;
    } else {
        feedback.push("Use caracteres especiais");
    }

    // Determinar nível de força
    let nivel, mensagem;
    if (pontos <= 1) {
        nivel = 'weak';
        mensagem = 'Senha fraca. ' + feedback.join('. ');
    } else if (pontos <= 2) {
        nivel = 'medium';
        mensagem = 'Senha média. ' + feedback.join('. ');
    } else {
        nivel = 'strong';
        mensagem = senha.length > 0 ? 'Senha forte!' : '';
    }

    return { nivel, mensagem };
}
