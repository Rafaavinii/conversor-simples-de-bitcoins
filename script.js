function converter() {
    let valor = document.getElementById('valor').value
    let resultado = document.getElementById('resultado')

    resultado.innerText = `R$ ${(valor * 49509.46).toFixed(2).replace('.', ',')}`
}

document.getElementById('button').addEventListener('click', converter)
document.getElementById('valor').onkeyup = converter