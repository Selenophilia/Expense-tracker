import React from 'react'

function Budget(props){
    const getMonth = () => {
            let dateTime = new Date();
            let months    = ['January','February','March','April','May','June','July','August',
                            'September','October','November','December'];
            let thisMonth = months[dateTime.getMonth()]
            let year = dateTime.getUTCFullYear();
           
            return `${thisMonth}, ${year}`
    }


    return(
    <div className="budget">
        <div className="budget__title">
    Available Budget in <span className="budget__title--month">{getMonth()}</span>:
        </div>
    <div className="budget__value"> {`$ ${props.formatNumber(props.total)}`}</div>

        <div className="budget__income clearfix">
                <div className="budget__income--text">Income</div>                    
                <div className="right">
    <div  className="budget__income--value">{`+ ${props.formatNumber(props.income)}`}</div>
                         <div className="budget__income--percentage">&nbsp;</div>   
                </div>
        </div>
        
        <div className="budget__expenses clearfix">
                <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                            <div className="budget__expenses--value">{`- ${props.formatNumber(props.expense)}`}</div>
                            <div className="budget__expenses--percentage">{`${props.handlePercentage(props.expense)}%`}</div>
                    </div>
        </div>
    </div>  
    );
}

export default Budget