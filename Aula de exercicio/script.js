function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()  
//var hora = data.getHours()
var hora = 22
msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
    //bom dia
        img.src("manhã1.jpeg")
    }

    else if(hora >= 12 && hora < 18){
    //Boa tarde
        img.src("tarde.jpeg")
    }

    else{
    //boa noite
        img.src("noite.jpeg")
    }

}