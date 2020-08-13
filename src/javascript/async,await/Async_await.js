import React from 'react'

export default function Async_await() {
  function delayP(sec){
    return new Promise((resolve, reject)=>{
      setTimeout(()=> {
        resolve(new Date().toISOString());
      }, sec * 1000);
    });
  }
  function normalFun(){
    return 'wow';
  }

  async function myAsync(){
    const result = await delayP(7).then((time=>{
      return 'x'
    }));
    console.log(result);
  
    return 'async';
  }

  myAsync().then((result)=>{
    console.log(result);
  })


  return (
    <div>
      
    </div>
  )
}
