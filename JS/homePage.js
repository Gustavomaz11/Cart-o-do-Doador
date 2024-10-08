const avatar = document.querySelector('.avatar')
const welcomeText = document.querySelector('.welcome-text')
const historico = document.querySelector('#historico')
const certificados = document.querySelector('#certificados')
const doarSangue = document.querySelector('#doarSangue')

const listaBtn = [avatar, welcomeText, historico, certificados, doarSangue]
const listaUrls = [
    'perfilUsuario.html',
    'perfilUsuario.html',
    'doacoes.html',
    'certificados.html',
    'https://hemose.setmore.com/'
]

for(let x = 0; x < listaBtn.length; x++) {
    listaBtn[x].addEventListener('click', () => {
        window.location.href = listaUrls[x]
    })
}

