function contar() {
    var ini = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível realizar a contagem, complete os dados.'
    } else {
        res.innerHTML = 'Contando... <br> '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if (p <= 0) {
            res.innerHTML = 'Passo inválido, Impossível realizar a contagem, considerando Passo em "1": <br>'  
            p = 1
        }

        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
