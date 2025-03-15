import React, { useEffect, useState } from 'react'

const StateandEffect = () => {

  const [score,setScore]=useState(0);
  const [balls,setBalls]=useState(0);
  const [overs,setOvers]=useState(0);

  useEffect(()=>{
    if(balls >= 6){
      setOvers(overs+1);
      setBalls(0);
    }
  },[balls]);

  const addscore=(runs)=>{
    setScore(score+runs);
    setBalls(balls+1);
  }
;
  return (
    <div className='container' ><h2>Cricket ScoreBoard</h2>
    
    <div>
        <h3>Score   :{score}</h3>
        <h3>Wickets : {wickets}</h3>
        <h3>Balls   : {balls}</h3>
        <h3>Overs   :{overs}</h3>
       
    </div>

    <div style={{display:"flex",gap:"10px"}}>
        <button onClick={()=>addscore(1)}>1 RUN</button>
        <button onClick={()=>addscore(2)}>2 RUN </button>
        <button onClick={()=>addscore(3)}>3 RUN</button>
        <button onClick={()=>addscore(4)}>4 RUN</button>
        <button onClick={()=>addscore(6)}>6 RUN</button>
        

    </div>


    </div>
  )
}

export default StateandEffect
