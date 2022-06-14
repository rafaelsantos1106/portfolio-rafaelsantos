function clicar(){
    var a = document.getElementById('a')
    var b = document.getElementById('b')
    var c = document.getElementById('c')
    var res = document.getElementById('res')
    var show = ''

    if(a.value.length == 0 || b.value.length == 0 || c.value.length==0 || c.value ==0){
    window.alert("Existe parâmetro em branco")

        if(c.value == 0){
            c.value = 1
        }
    }
    

    else{
        d = Number(a.value)
        e = Number(b.value)
        f = Number(c.value)
        res.innerHTML= "Contando... <br>"
       if(d < e){ 
        for(var i=d;i<e;i=i+f){
        res.innerHTML+=` ${i} \u{1F449}`
        }
       }
       else if(d > e){
        for(var i=e; i<d;i+=f)
        res.innerHTML+=` ${i} \u{1F449}`
       }
       else if(d==e){window.alert("Numeros iguais")}
       else{window.alert("Deu ruim")}
    }

   
}
