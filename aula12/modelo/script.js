function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 8
    //var min = 40
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}