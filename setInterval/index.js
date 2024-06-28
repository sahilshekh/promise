
const start =  document.getElementById("start")
const stops =  document.getElementById("stop")

function randomColor(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
   return `#${randomColor.padStart(6, '0')}`
}

const genrateColorOnStart=function(){
    document.querySelector("body").style.background=randomColor()
}
//    start.addEventListener("click",function(){})
let setIntervalStop;
start.addEventListener("click",function(){

    setIntervalStop=   setInterval(genrateColorOnStart,1000)
})
stops.addEventListener("click",function(){
    clearInterval(setIntervalStop)
})