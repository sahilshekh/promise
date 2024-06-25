

const form =document.querySelector("form")

form.addEventListener("submit",function(e){
   e.preventDefault();
   const height = parseInt(document.querySelector("#height").value)
   const weight = parseInt(document.querySelector("#weight").value)
   const result =document.querySelector("#result")

   if(height =="" || height ==0 || isNaN(height)){
    result.innerHTML ="please provide valid numbers for height"
   }
   else if(weight =="" || weight ==0 || isNaN(weight)){
    result.innerHTML ="please provide valid numbers for weight"
   }
   else{
        const bmi =(weight/((height*height)/10000).toFixed(2))
        if(bmi <=18.6){
            result.innerHTML =`under Weight ${bmi} is less than 18.6`
        }
        else if(bmi >18.6 && bmi <=24.9){
            result.innerHTML =`normal Weight ${bmi} 18.6 and 24.9`

        }
        else{
            result.innerHTML =`over Weight ${bmi} `

        }
        // result.innerHTML =bmi
   }
   console.log(height)
})