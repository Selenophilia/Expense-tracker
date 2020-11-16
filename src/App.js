import { useState } from 'react';
import './App.css';
import Budget from './components/Budget'
import Expense from './components/Expense';
import Form from './components/Form'
import Income from './components/Income';

function App() {
  const [income, setIncome] = useState([
    //  {id: 0, description: "Salary", value: 2100, type: 'income' },
    //  {id: 1, description: "Sold Car",value: 10100, type: 'income' },
   ])
  const [expense, setExpense] = useState([
    // {id: 0, description: "Grocery Shopping", value: 900, type: 'expense' },
    // {id: 1, description: "Apartment Rent", value: 1200,type: 'expense' },
   ])

  const [totalIncome, settotalIncome] = useState(0)
  const [totalExpense, settotalExpense] = useState(0)
  const [total, setTotal] = useState(0)

  const handleTotalIncome = (num) => {
    settotalIncome(num)
  }
  const handleTotalExpense = (num) => {
    settotalExpense(num)
  }
  const handleCalculations = (type, description, value) => {
    let convertVal = Number(value)
    if(type === 'income'){
        const newIncome = {id: income.length + 1 - 1 , description, type, value: convertVal}
        setIncome([...income, newIncome])    
    } else  {
      const newExpense = {id: expense.length + 1 - 1 , description, type,value: convertVal}
      setExpense([...expense, newExpense])
    }
  }

  const handleTotal = (type, num) => {
    let convertVal = Number(num)
    if(type ===  'income'){
      setTotal( convertVal + (totalIncome - totalExpense))
    } else {
      setTotal((totalIncome - totalExpense) - convertVal)
    }
  }

  const deleteTransaction = (type, num, id) => {
    let convertVal = Number(num)
    if(type ===  'income'){
      let incomeArr = [...income];
      let incomeId = income.findIndex(data => data.id === id)      
      incomeArr.splice(incomeId, 1)
      setIncome(incomeArr)
      settotalIncome(totalIncome - convertVal)
      setTotal(total - convertVal)
    } else {
      let expenseArr = [...expense]
      let expenseId = expense.findIndex(data => data.id === id)
      expenseArr.splice(expenseId,1)
      setExpense(expenseArr)
      settotalIncome(totalExpense + convertVal)
      setTotal(total + convertVal)

    }
  }

  const formatNumber = (x) =>  {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handlePercentage = (num) => {
    return num / 100 
  }
  return (
    <div className="App">
      <div className="top">
           <Budget income={totalIncome}
                   expense={totalExpense}
                   total={total}
                   formatNumber={formatNumber}
                   handlePercentage={handlePercentage} 
           />
      </div>
      <div className="bottom">
        <Form handleCalculations={handleCalculations}  
              handleTotal={handleTotal}
              formatNumber={formatNumber}
            
        />
        <div className="container clearfix">
          <Income income={income}
              handleTotalIncome={handleTotalIncome}
              deleteTransaction={deleteTransaction}
              formatNumber={formatNumber}  
          />
          <Expense expense={expense}
              handleTotalExpense={handleTotalExpense}
              deleteTransaction={deleteTransaction} 
              formatNumber={formatNumber}  
              handlePercentage={handlePercentage} 
          />
        </div>
      </div>

    </div>
  );
}

export default App;
