import React from 'react'


function Screen (props) {
    
    console.log(props.calculator)
    
    
    
    return (
     <div className="screen">
       <p className="cal-display"><span> ({props.result || 0}) </span> {props.calculator || 0} </p>
     </div>   
        
        
        
    )
    
    
}

export default Screen