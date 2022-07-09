import React from 'react'


function Buttons (props) {
    
     const numbersArray = []
    for(let i = 1 ; i < 10; i++) {
     
       numbersArray.push(<button 
       onClick={()=>props.updateCalculator(i.toString())}
       key= {i}
       className="number-button">{i}
       </button>) 
    }
    
    const operators = ['/', '*', '+', '-', '.']
    return (
     <div className="buttons">
      <div className="operator-buttons">
      <button  className="subtract operator-button"> / </button>
      <button   className="multiply operator-button">  x </button>
      <button  className="subtract operator-button"> - </button>
      <button  className="add operator-button"> + </button>
      <button   className="delete operator-button"> DEL </button>
      </div>
      <div className="number-buttons">
          
      {numbersArray}
      <button className="one number-button"> 0 </button>
      <button className="one number-button"> . </button>
      <button className="one number-button"> = </button>
      </div>
     
     </div>   
        
        
        
    )
    
    
}

export default Buttons