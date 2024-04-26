function fizzbuzz(szam) {

    if(isNaN(szam)){
        return "Ez nem szám";
    }

    szam = parseInt(szam);
    if (szam <= 0) {
        return "pozitív szám lehet csak a bemenet!"
    }
    if (parseInt(szam) % 3 == 0 && parseInt(szam) % 5 == 0) {
        return "fizzbuzz";
    }
    else if (parseInt(szam) % 3 == 0) {
        return "fizz";
    }
    else if (parseInt(szam) % 5 == 0) {
        return "buzz";
    }
    else{
        return parseInt(szam);
    }
}

function sorFizzBuzz(n){
    const LISTA = [];
    let index = 1;
    while (index <= n) {
        LISTA.push(fizzbuzz(index));
    }
    return LISTA.join(', ');
}