let numero = document.getElementById('n1')
let campo = document.getElementById("campo")
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

/**********/

function inLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

/**********/

function Avalie(){
    
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        campo.appendChild(item)
        res.innerHTML = " "
    }
    else{
        window.alert("Valor invalido ou já encontrado na lista")
    }
    numero.value=''
    numero.focus()
}

function Finalizar() {

    if(valores.length == 0){
        window.alert("Insira novos elementos")
    }

    else{
        let tot = valores.length
        let soma = 0
        let media = 0
        let maior = valores[0]
        let menor = valores[0]
       
        for(let pos in valores){
            soma = soma + valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

    media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<br>Ao todo, temos ${tot} números cadastrados.</br>`
        res.innerHTML += `<br>São eles: ${valores}</br>`
        res.innerHTML += `<br>Maior número é ${maior} e menor número é ${menor}</br>`
        res.innerHTML += `<br> A soma de todos os números é ${soma} e a média é ${media} </br>`
        
        
    }

}