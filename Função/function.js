function parimpar(n){
    if(n%2 == 0){
        return "Par!"
    }
    else{
        return "Ímpar"
    }
}
console.log(parimpar(2))

/* ***************/

function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(2,3))

/* ***************/

let v = function(x){
    return x**2
}

console.log(v(5))

/* ***************/

function fatorial(n){
    let fat = 1

    for(var i=n;i>1;i--){
        fat = fat * i
    }
    return fat
}

console.log(fatorial(5))


/* ***************/

function fator(n){
    if(n == 1){
        return 1
    }

    else{
        return n * fatorial(n-1)
    }
}

console.log(fator(5))