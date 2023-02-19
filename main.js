let hexArray = ['0', '1', '2', '3', '4', '5','6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let button = document.querySelector('.btn1');
let colorShow = document.querySelector('.color-show');
let input = document.querySelector('.input1');

input.value = '#'
const randomHex = ()=>{
    let strRandom = '#'
    for (let i = 0; i <= 5 ;i++){
        strRandom = strRandom + hexArray[(Math.round(Math.random()*15))];
    }
    return strRandom;
}

button.addEventListener('click',()=>{
    let stringRandom = randomHex();
    colorShow.style.backgroundColor= stringRandom;
    input.value =stringRandom;
})


let value = ["#"];
input.addEventListener('keypress',(e)=>{
   if(e.target.value.length> 6){
    e.preventDefault();
   }
    
})
input.addEventListener('keyup',(e)=>{
    colorShow.style.backgroundColor =  e.target.value;
    console.log(e.target.value)
    if(e.target.value.length> 6){
        e.preventDefault();
       }
    if( e.keyCode == 8){
        value.pop();
    }
    if( value.length == 0){
        value.push( '#');
    }
    if(hexArray.includes(e.key.toUpperCase()) && value.length < 7){
        value.push( e.key);
   }else{
    e.target.value = value.join("");
   }
})