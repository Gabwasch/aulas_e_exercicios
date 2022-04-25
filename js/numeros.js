let num = document.getElementById('txtn')
let tab = document.getElementById('seltab')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 9999){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou ja se encontra na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let tt = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tt
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tt} Números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores é ${media}</p>`
    }
}