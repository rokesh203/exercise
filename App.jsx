import React from 'react'

const StateandEffect = () => {
  return (
    <div className='container' ><h2>Cricket ScoreBoard</h2>
    
    <div>
        <h3>Score   :</h3>
        <h3>Wickets :</h3>
        <h3>Balls   :</h3>
        <h3>Overs   :</h3>
       
    </div>

    <div style={{display:"flex",gap:"10px"}}>
        <button>1 RUN</button>
        <button>2 RUN </button>
        <button>3 RUN</button>
        <button>4 RUN</button>
        <button>5 RUN</button>
        

    </div>

    <div style={{marginTop:"20px"}}>
    <button style={{background:"read"}}>Wickets</button>

    </div>

    </div>
  )
}

export default StateandEffect