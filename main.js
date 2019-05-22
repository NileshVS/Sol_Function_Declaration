//function with no parameters but returns value
function add(){
    let value1=10;
    let value2=20;
    let result= value1+value2;
    return  result;    
}
console.log(add());

//function with no parameters and does not returns value
function add1(){
    let value1=50;
    let value2=20;
    let result= value1+value2;
    console.log(result);    
}
add1();

//function with parameters and returns value
function add2(value1,value2){
    let result= value1+value2;
    return  result;    
}
let resultAdd2= add2(29,89);
console.log(resultAdd2)

//function with parameters but does not returns value
function add3(value1,value2){

    let result=value1+value2;
    console.log(result);
}

add3(45,89);