let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    // "se na lista o number de 'N' for diferente de -1" | '-1' indica que o valor não foi encontrado em 'l'
    if (l.indexOf(Number()) != -1) { 
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo certo!')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}

