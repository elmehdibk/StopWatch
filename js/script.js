const sw=document.querySelector('#stop-watch')

const date = new Date()

let S = date.getSeconds()



setInterval(()=>{
    sw.innerHTML=S+=1; 
  },1000)

// console.log(setS);