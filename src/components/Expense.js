import React, { useEffect } from 'react'

function Expense(props){
    const totalExp = props.expense.reduce((acc, next) =>  acc + next.value , 0)

    const deleteHandler = (type, value, id) => {
        props.deleteTransaction(type, value, id)
    }
    
    const viewTemplate = (
        <div className="expenses">
        <h2 className="expenses__title">Expenses</h2>     
        <div className="expenses__list">             
            {props.expense.map((exp) => (
                <div className="item clearfix" key={exp.id} id={`expense-${exp.id}`}>
                    <div className="item__description">{exp.description}</div>
                    <div className="right clearfix">
                        <div className="item__value">{`- ${props.formatNumber(exp.value)}`}</div>
                             <div className="item__percentage">{`${props.handlePercentage(exp.value)}%`}</div>
                        <div className="item__delete">
                            <button className="item__delete--btn"
                                    onClick={() => deleteHandler(exp.type,exp.value, exp.id)} 
                            ><i className="ion-ios-close-outline"></i></button>
                        </div>
                    </div>
            </div>
            ))}  
        </div>
    </div>
     )

     const blankTemplate = (
         <div className="expenses">
            <h2 className="expenses__title">Expense</h2>  
                    <p>Expense List is empty!!</p> 
         </div>
     )

    useEffect(() => {
        props.handleTotalExpense(totalExp)
    }, [props, totalExp])
    return(
        props.expense.length !==0 ?  viewTemplate : blankTemplate
    );
}

export default Expense