let randomNum=Math.floor(Math.random()*20+1);
console.log(randomNum);
const Prom=new Promise((resolve,reject)=>{
    if(randomNum>5){
        resolve(randomNum)
    }else{
        
    }
})