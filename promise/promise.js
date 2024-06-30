
const promiseOne = new Promise((resolve,reject)=>{
     setTimeout(function(){
          const flag = false
          if(! flag){
              resolve({userName:"sahil",Password:"Sahil@8857"})
          }
          else{
            reject("getting issue")
          }
     },1000)
})

promiseOne.then((res)=>{
     console.log(res)
   return  res.userName
}).then((userName)=>{
console.log(userName)
}).catch((err)=>{
    console.log(err)
})


// const promiseTwo = new Promise((resolve,reject)=>{})


const promiseTwo = new Promise((resolve,reject)=>{

    const flag =true
    if(flag){
     resolve({UserName:"sshekh",Password:"Pass@123"})
    }
    else{
        reject("not working getting reject")
    }

})


async function prom(){
      try {
        const response=await promiseTwo
        console.log(response.UserName)
      } catch (error) {
        console.log(error)
      }
}
prom()



async function feating(){
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const response  = await res.json()
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

feating()