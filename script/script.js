let btnNumber=document.querySelectorAll('.number');
let outPut=document.querySelector('.output');

let clear=document.querySelector('.clear');

let sum=document.querySelector('#sum')

btnNumber.forEach(val=>{val.addEventListener('click',function(){
    outPut.value+=(val.textContent);
})});

sum.addEventListener('click',Result);

function Result(){
   outPut.value=eval(outPut.value)
   console.log(outPut.value)
}

clear.addEventListener('click',function(){
    outPut.value=''
})
