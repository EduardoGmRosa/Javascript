let valores = [9, 12, 14, 10, 2, 4, 6, 4, 5, 7]


/*                for com 3 elementos
                    Estrutura do for
     Inicialização > Teste Lógico > Incremento
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`Posição ${pos} Valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`Posição ${pos} Valor ${valores[pos]}`)
}