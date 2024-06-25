



const clicksButton = document.querySelectorAll(".clicks")
const mainContainer = document.querySelector("body")


clicksButton.forEach(function(button){
button.addEventListener("click",function (e) {
    console.log(e)
    console.log(e.target.id)
  if(e.target.id=="black"){
      mainContainer.style.background="black"
      mainContainer.style.color="white"

  }
  else if(e.target.id=="green"){
    mainContainer.style.background="green"
    mainContainer.style.color="white"

}
else if(e.target.id=="yellow"){
    mainContainer.style.background="yellow"
    mainContainer.style.color="white"

}
else if(e.target.id=="pink"){
    mainContainer.style.background="pink"
    mainContainer.style.color="pink"

}
})
})
    

