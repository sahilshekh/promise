const randomNumber =parseInt(Math.random()*100+1)
console.log(randomNumber)

const inputGuess = document.querySelector("#Number")
const submit =document.querySelector("#submit")
const paragraph =document.createElement("p")
// console.log(submit)
const guessForArr = document.querySelector("#guesses")
const  remaining =document.querySelector("#remainingGuess")

let guessArr =[]
let remains =1
let userPlay =true
submit.innerHTML="Submit"
if(userPlay){
    submit.addEventListener("click",function(e){
   e.preventDefault()
      const res =parseInt(inputGuess.value)
      validateNumber(res)
    })
}

 function validateNumber(guess){
       if(isNaN(guess)){
        alert("give the valid number")
       }
       else{
        guessArr.push(guess)
          checkNumber(guess)
       }
 }

 function checkNumber(guess){
 
  if(guess===randomNumber){
    paragraph.innerHTML="Your Win"
    userPlay=false
  }
  else{
    paragraph.innerHTML="Try another Move"
  }
 const mainDiv =document.getElementById("guessDiv")
 mainDiv.append(paragraph)
   remains++
   guessForArr.innerHTML=guessArr
   remaining.innerHTML=`${11-remains}`
   inputGuess.value=''
   console.log(remains)
 if(remains==11){
  inputGuess.setAttribute("disabled","")
  paragraph.innerHTML="Your Free Trial is end"

 }
 }