const pasbox=document.getElementById("pass-box");
const totalCharacter=document.getElementById("total-char")
const upperInput=document.getElementById("upper-case");
const lowerInput=document.getElementById("lower-case")
const numberInput=document.getElementById("numbers")
const symbolInput=document.getElementById("symbols")


const generatePassword=(password="")=>{
   if(upperInput.checked){
    password=getRandom(upperSet)
 
   }
   if(lowerInput.checked){
     password=getRandom(lowerSet)
  
    }
    if(numberInput.checked){
     password=getRandom(numberSet)
  
    }
    if(symbolInput.checked){
     password=getRandom(symbolSet)
  
    }
    if(password.length<totalCharacter.value){
     return generatePassword(password);
    }
   console.log(password);
 }
 document.getElementById("btn").addEventListener(
   "click",
   function(){
     generatePassword();
   }
 )
 