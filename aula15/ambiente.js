let num = [1, 22, 6, 4, 5, 9]
//         0  1  2  3  4  5... 10 POSIÇÃO ÍNDICE 
//         num.push(7, 3, 4)
num.sort()
num[3] = 6
console.log(num)
console.log(`O vetor possui ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num[1])

let pos = num.indexOf(22) // Puxar a posição do valor
console.log(`O valor 22 está na posição ${pos}`)