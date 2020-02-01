let x = 5
let y = 7

let dodawanie = function sum(x,y) {
    let result = x+y;
    return result;
};
console.log('Wynik dodawania wynosi:',x+y);

let odejmowanie = function min (x,y) {
    let result = x-y;
    return result;
};
console.log('Wynik odejmowania wynosi:',x-y);
if (x-y<0){
    console.log('WYNIK JEST UJEMNY')
};

let mnozenie = function multiply(x,y) {
    let result = x*y;
    return result;
};
console.log('Wynik mnozenia wynsoi:',x*y);
