let number = '';
display = document.getElementById('display');
function shownumber(num){
    last = num;
    number = number + num;
    display.innerHTML = number;
}
let fnumber ;
let operateur = '';
function  opertation(opt){
    if(operateur === ''){
        fnumber = parseFloat(number);
    number = '';
    operateur = opt;

    display.innerHTML  = number;
    }
    else{
        equal();
        number = '';
        operateur = opt;

    display.innerHTML  = number;
        
    }
    
    

}
function equal(){
    let second = parseFloat(number);
    switch (operateur){
        case '+' : 
            fnumber = fnumber + second;
            display.innerHTML = fnumber;
            break;
        case '-' :
            fnumber = fnumber - second;
            display.innerHTML = fnumber;
            break;
        case '*':
            fnumber = fnumber * second;
            display.innerHTML = fnumber;
            break;
        case '/':
            if(second===0){
                display.innerHTML = 'error';
                break;

            }
            else{
                fnumber = fnumber/second;
                display.innerHTML = fnumber;
            }



    }
}
function clr(){
    number = '';
    fnumber = 0;
    display.innerHTML = number;
}
let last ='';
function back_(){
    number = number.substring(0,number.length-1)  ;
    display.innerHTML = number;
}
