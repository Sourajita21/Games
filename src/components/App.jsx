import React, { useState } from "react";
import Grid from "./Grid";
function App(){

    const [coordinates, setCoordinates] = useState({
      sr : 0,
      sc : 0,
      er : 1,
      ec : 1
    });
    function handleChange(event){

      const {name,value} = event.target;

      setCoordinates((prevCoordinates)=>{
        return ({
          ...prevCoordinates,
          [name] : value
        });
      });
      
    }

    return (
      <div style={{backgroundColor: "#7898c1"}}>
          <div style={{display:"flex", alignContent:"center", justifyContent:"center",justifySelf:"center"}}>

          <input onChange={handleChange} type="number" min ={0} name = "sr" placeholder="Starting Cell row-index" style={{width:"10rem",height:"3rem", borderRadius:"20px"}}/>
          <input onChange={handleChange} type="number" min ={0} name = "sc" placeholder="Starting Cell col-index" style={{width:"10rem",height:"3rem", borderRadius:"20px"}}/>

          <input onChange={handleChange} type="number" min ={0} name = "er" placeholder="Ending Cell row-index" style={{width:"10rem",height:"3rem", borderRadius:"20px"}}/>
          <input onChange={handleChange} type="number" min ={0} name = "ec" placeholder="Ending Cell col-index" style={{width:"10rem",height:"3rem", borderRadius:"20px"}}/>
          </div>

          <Grid numRows={25} numCols={25} sr={coordinates.sr} sc={coordinates.sc} er={coordinates.er} ec={coordinates.ec}/>
        </div>
      );
    }
    
    export default App;