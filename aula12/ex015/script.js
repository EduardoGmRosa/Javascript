function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value < 1900 || fano.value > ano) {
        window.alert('Erro: Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                genero = 'Menino'
                img.setAttribute('src', 'imagens/bbM.jpg')
            } else if (idade < 21) {
                // Jovem
                genero = 'Adolescente Homem'
                img.setAttribute('src', 'imagens/jovemM.jpg')
            } else if (idade < 60) {
                // Adulto
                genero = 'Adulto'
                img.setAttribute('src', 'imagens/adultaM.jpg')
            } else {
                // Idoso
                genero = 'Idoso'
                img.setAttribute('src', 'imagens/idosoM.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                genero = 'Menina'
                img.setAttribute('src', 'imagens/bbF.jpg')
            } else if (idade < 21) {
                // Jovem
                genero = 'Adolescente Mulher'
                img.setAttribute('src', 'imagens/jovemF.jpg')
            } else if (idade < 60) {
                // Adulto
                genero = 'Adulta'
                img.setAttribute('src', 'imagens/adultaF.jpg')
            } else {
                // Idoso
                genero = 'Idosa'
                img.setAttribute('src', 'imagens/idosoF.jpg')
            }
        }
        img.style.borderRadius = '50%';
        img.style.padding = '15px';
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

