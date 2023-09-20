const sw=document.querySelector('#stop-watch')

const date = new Date()

let S = date.getSeconds()



setInterval(()=>{
    S+=1
    if(S>60){
        S=0
    }
    sw.innerHTML=S; 
  },1000)

// console.log(setS);