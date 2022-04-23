function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[1].checked){
            genero = 'Homem'
            if(idade >=0 && idade< 10){
                img.setAttribute('src', '../images/bb_m.jpg')
            }else if(idade< 21){
                img.setAttribute('src', '../images/jovem_m.jpg')
            }else if(idade < 50){
                img.setAttribute('src', '../images/adulto_m.jpg')
            }else{
                img.setAttribute('src', '../images/idoso_m.jpg')
            }
        }else if(fsex[0].checked){
            genero = 'Mulher'
            if(idade >=0 && idade< 10){
                img.setAttribute('src', '../images/bb_f.jpg')
            }else if(idade< 21){
                img.setAttribute('src', '../images/jovem_f.jpg')
            }else if(idade < 50){
                img.setAttribute('src', '../images/adulto_f.jpg')
            }else{
                img.setAttribute('src', '../images/idoso_f.jpg')
            }
        }
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}