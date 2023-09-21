const seconds=document.querySelector('#S')
const mSeconds=document.querySelector('#MS')
const start =document.querySelector('#start')

// const date = new Date()

let S =0
let MS=0

start.addEventListener('click',()=>{
    setInterval(()=>{
        //MILLI SECOND
        MS+=1
        if(MS>=60){
            MS=0    
        }
        if(MS>=10){
            mSeconds.innerHTML=MS
        }
        if(MS<10){
            mSeconds.innerHTML='0'+MS
        }
    
        //SECOND
        if (MS==0) {
            S+=1
            setInterval(()=>{
                    if(S>=60){
                        S=0
                    }
                    
                },1000)
                if(S>=10){
                    seconds.innerHTML=S+':'
                }
                if(S<10){
                    seconds.innerHTML='0'+S+':'
                }
              
        }
        
        //  mSeconds.innerHTML=MS  
    },20)
    
})



        
 
    
