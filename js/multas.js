function calcular(){
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} km/h</strong></p>`
    if (vel > 60){
        res.innerHTML += '<p>Voce ultrapassou o limite de velocidade.<strong>VOCÊ FOI MULTADO!</strong></p'
     }
     res.innerHTML += 'Dirija sempre usando cinto de segurança!'
     
}

var idade = 101
console.log(`voce tem ${idade} anos.`)
if(idade<16){
    console.log('Não vota')
}else if(idade < 18 || idade > 65){
    console.log('voto opcional')  
}else {
    console.log('voto obrigatório')
}

var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas`)
if(hora < 12){
    console.log('bom dia')
}else if (hora <= 18){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}

var diaSem = agora.getDay()
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break
    default:
        console.log('erro, dia invalido')
        break
}