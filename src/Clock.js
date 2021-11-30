import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  
  useEffect(()=>{
    const timeId = setInterval(()=>{
      setTime(new Date())
    },1000)

    return function cleanUp(){
      clearInterval(timeId)
    }
  },[])

 

  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  // }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
