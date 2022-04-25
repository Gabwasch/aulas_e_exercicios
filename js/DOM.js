var p1 = window.document.getElementsByTagName('p')[1]
/*
window.document.write('Esta escrito assim: ' + p1.innerText)
*/
var d = window.document.getElementById('msg')
d.innerHTML = 'estou aguardando interação via JavaScript <strong>(mude background)</strong>' 

var d = window.document.querySelector('div#msg')
d.style.background = 'purple'


var a = window.document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerText = 'clicou!'
    a.style.background = 'red'
}
function entrar(){
    a.innerText = 'Mouse dentro'
}
function sair(){
    a.innerText = 'Mouse fora'
    a.style.background = 'green'
}

function somar(){
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}
