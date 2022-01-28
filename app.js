let inputDegree;
let  output=document.getElementById('celcius');
let  convertbtn=document.getElementById('converter');
let clearbtn=document.getElementById('clear')
let celcius;
let input=document.querySelector('input');
 function getconvert(){
     inputDegree=document.getElementById('input-degree').value;
     celcius=((inputDegree-32)*(5/9));
     output.innerText=celcius;
     
 }
 convertbtn.onclick=getconvert;
clearbtn.onclick=function(){
    output.innerText='0';
    input.value='0';
}
 