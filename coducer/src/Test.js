import React,{useState} from 'react'
 
function Test() {
var add = () => {
        return 0;
    }
    const  [valcount, setvalcount] = useState(add());
  
    return (
        <div>
           <button onClick={() =>{setvalcount(valcount +1);
                                    console.log(valcount);}}>ADD</button>
        </div>
         
    )
   
}

export default Test
