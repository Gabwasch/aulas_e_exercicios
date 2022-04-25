/*let num = [5, 8, 2, 9, 3]

num.push(1)
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


for(let pos=0; pos < valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}*/

function parimpar(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res = parimpar(587)
console.log(res)

function soma(n1=0, n2=0){
    return n1+n2
}

console.log(soma(7,2)) /*ou console.log(soma(7)) sem declarar parametro para n2 continua funcionando */


function fatorial(n) {
    let fat = 1
    for(let c = n; c> 1; c++){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))


//RECURSIVIDADE

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/