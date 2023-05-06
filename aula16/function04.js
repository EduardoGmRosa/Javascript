function fatorial(n) {
    let fat = 1 
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// 5! = 5x4 = 20 > 20 x 3 = 60 > 60 x 2 = 120 > 120 x 1 = 120