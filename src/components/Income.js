import React, { useEffect } from 'react'

function Income(props){
    const totalInc = props.income.reduce((acc, next) =>  acc + next.value , 0)

    const deleteHandler = (type, value, id) => {
        props.deleteTransaction(type, value, id)
    }

     const viewTemplate = (
        <div className="income">
            <h2 className="icome__title">Income</h2>    
                <div className="income__list">
                        { props.income.map((inc) => (
                            <div className="item clearfix" key={inc.id} id={`income-${inc.id}`}>
                                    <div className="item__description">{inc.description}</div>
                                    <div className="right clearfix">
                                            <div className="item__value">{`+ ${props.formatNumber(inc.value)}`}</div>
                                        <div className="item__delete">
                                            <button className="item__delete--btn"
                                            onClick={() => deleteHandler(inc.type, inc.value, inc.id)} 
                                            ><i className="ion-ios-close-outline"></i></button>
                                        </div>
                                    </div>
                            </div> 
                        ))}
                </div>
            </div>
     )

     const blankTemplate = (
         <div className="income">
            <h2 className="icome__title">Income</h2>  
                    <p>Income List is empty!!</p> 
         </div>
     )

     useEffect(() => {
         props.handleTotalIncome(totalInc)
     }, [props, totalInc])
    return(
        props.income.length !==0 ?  viewTemplate : blankTemplate
    );
}

export default Income