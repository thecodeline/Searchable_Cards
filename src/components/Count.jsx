import { useState } from "react";






 function Counter(){
    const [myn,Setmyn] = useState(0);
    function add_(){
        Setmyn(myn+1);
    }
    function decrement(){
        Setmyn(myn-1);
    }
return(<div>
<button onClick={add_}>
    +
</button>
 <h1 >{myn}</h1>
<button onClick={decrement}>
    -
</button>
</div>)
 }
 export default Counter;