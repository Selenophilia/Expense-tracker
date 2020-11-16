import React, { useState } from 'react'

function Form(props){
    const [userInput, setUserInput] = useState('')
    const [value, setValue] = useState(0)
    const [type, setType] = useState('income')


    const handleSubmit = (e) =>  {
        e.preventDefault()
        props.handleCalculations(type, userInput, value)
        props.handleTotal(type, value)
        setUserInput('')
        setValue(0)
    }

    const handleUserInput = (e) =>  {
        setUserInput(e.target.value)
    }
    const handleType = (e) =>  {
        setType(e.target.value)
   }
   const handleValue = (e) =>  {
       let formatNum = props.formatNumber(e.target.value)
       console.log(formatNum)
       setValue(e.target.value)
   }
    return(
    <div className="add">
        <form className="add__container"  onSubmit={(e) => handleSubmit(e)}>
            <select className="add__type"
                    onChange={(e) => handleType(e)}
            >
                <option value="income" selected>+</option>
                <option value="expenses">-</option>
            </select>
            <input type="text" 
                   className="add__description"
                   placeholder="Add description" 
                   onChange={(e) => handleUserInput(e) }
                   value={userInput}
                   required/>
            <input type="number" 
                   className="add__value" 
                   placeholder="Value"
                   onChange={(e) => handleValue(e) }
                   value={value}
                   required />
            <button className="add__btn"   
            ><i className="ion-ios-checkmark-outline"></i></button>
        </form>
    </div>

    );
}

export default Form