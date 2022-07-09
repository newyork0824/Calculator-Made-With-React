import React from 'react'



function App() {
//states for the values to update
const[calculator, setCalculator]= React.useState("")
const[result, setResult] = React.useState("")    
    

//operators 
const operators = ['/', '*', '+', '-', '.']
 
 
//update state
const updateCalculator = (value) => {
 if(operators.includes(value) && calculator === "" || operators.includes(value) && operators.includes(calculator.slice(-1))) {
     return
 } 
    
setCalculator(calculator + value)
 
 if(!operators.includes(value)) {
         setResult(eval(calculator + value).toString())
     }

 
}
//delete and equal button logic 
const equals = () => {
  setCalculator(eval(calculator).toString())  
}

const deleteLastElement = () => {
    if(calculator == '') {
        return
    }
    const value = calculator.slice(0, -1)
    setCalculator(value)
}

const squareRoot = () => {
  setCalculator(calculator * calculator)  
    
}

//creating the numbered buttons

const numbersArray = []
    for(let i = 1 ; i < 10; i++) {
     
       numbersArray.push(<button 
       onClick={()=>updateCalculator(i.toString())}
       key= {i}
       className="number-button">{i}
       </button>) 
    }


    
    return (
    
     <div className = "calculator">
     <div className="screen">
       <p className="cal-display"><span> ({result || 0}) </span> {calculator || 0} </p>
     </div>   
       <div className="buttons">
      <div className="operator-buttons">
      <button onClick={()=> updateCalculator('/')}  className="subtract operator-button"> / </button>
      <button  onClick={()=> updateCalculator('*')}    className="multiply operator-button">  x </button>
      <button  onClick={()=> updateCalculator('-')}   className="subtract operator-button"> - </button>
      <button  onClick={()=> updateCalculator('+')}   className="add operator-button"> + </button>
      <button onClick={deleteLastElement}  className="delete operator-button"> DEL </button>
      </div>
      <div className="number-buttons">
          
      {numbersArray}
      <button onClick={() => updateCalculator(0)} className="one number-button"> 0 </button>
      <button onClick={deleteLastElement} className="one number-button"> . </button>
      <button onClick={equals} className="one number-button"> = </button>
      <button onClick={squareRoot}  className="one number-button"> x^2</button>
      </div>
     
     </div>   
        
    
     </div>   
        
        
        
    )
    
    
}
export default App 