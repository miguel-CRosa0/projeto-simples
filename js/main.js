document.getElementById("texto-final").addEventListener('mouseover', () => {
    document.getElementById("texto-final").style = 'animation: 0.25s textoAnim linear;';
});

document.getElementById("texto-final").addEventListener('animationend', () => {
    document.getElementById("texto-final").style = 'animation: none;';
});