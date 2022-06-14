function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoDigitado = document.getElementById('txtano')
    var idade = ano - anoDigitado.value
    var sexo = document.getElementsByName('radsex')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute("id", "foto")
    
    var genero = ''

    if(anoDigitado.value.length == 0 || anoDigitado.value > ano){
        window.alert("Try again")
    }

    else{

        if(sexo[0].checked){
            genero = "Homem"

            if(idade<15){
                img.setAttribute('src', 'bebehomem.jpg')
            }
            else if(idade < 45){
                img.setAttribute('src', 'homem.jpeg')
            }
            else{
                img.setAttribute("src", 'idosoh.jpeg')
            }
        }
        else if(sexo[1].checked){
                genero = "Mulher"
    
                if(idade<15){
                    img.setAttribute('src', 'bebemenina.webp')
                }
                else if(idade < 45){
                    img.setAttribute('src', 'mulher.webp')
                }
                else{
                    img.setAttribute("src", 'idosam.jpeg')
                }
        }
    }
    res.innerHTML = `Dectado ${genero} com ${idade} anos`
    res.appendChild(img)
}