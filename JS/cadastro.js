
const entrar = document.querySelector('#entrar')

const listaBtn = [entrar]
const url = [
    'index.html'
]

for(let x = 0; x < url.length; x++) {
    listaBtn[x].addEventListener('click', () => {
        window.location.href = url[x]
    })
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
            color: '#e41e26',
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