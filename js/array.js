/*let num = [5, 8, 2, 9, 3]

num.push(1)
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


for(let pos=0; pos < valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}*/
let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}