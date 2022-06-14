function verificar(){
    var data = new Date() // função para extrair data atual
    var ano = data.getFullYear() // função para extrair ano atual
    var fano = document.getElementById('txtano')
    var sex = document.getElementsByName('radsexo')
    var res = document.querySelector('div#res')
    var idade = ano - fano.value
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var genero = ''

    if(fano.value.length == 0 || fano.value > ano){
        window.alert("There's something wrong")
    }

    else{
        
        if(sex[0].checked){
            genero = 'Homem'

            if(idade<15){
                img.setAttribute('src', 'bebehomem.jpg')
            }
            else if(idade<50){
                img.setAttribute('src', 'homem.jpeg')
            }
            else{
                img.setAttribute('src', 'idosoh.jpeg')
            }
        }

        else if(sex[1].checked){
            genero = "Mulher"

            if(idade<15){
                img.setAttribute('src', 'bebemenina.webp')
            }
            else if(idade<50){
                img.setAttribute('src', 'mulher.webp')
            }
            else{
                img.setAttribute('src', 'idosam.jpeg')
            }
        }

        
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}