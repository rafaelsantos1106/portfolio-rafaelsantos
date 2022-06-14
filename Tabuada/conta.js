function clicar(){
    var numero = document.getElementById('num')
    var res = document.getElementById('res')
    var i = 10
    let tab = document.getElementById('seltab')


    if(numero.value.length == 0){
        window.alert('Type a number, please')
    }
    else{
        
        let n = Number(num.value)
        tab.innerHTML = 'Type a number above'
        
        for(var j=1;j<=i;j++){
        let item = document.createElement('option')
        item.text = `${n} X ${j} = ${n*j}`
        item.value = `tab${j}`
        tab.appendChild(item)
        }
    }
    
}
