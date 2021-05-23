import React, { useState, useEffect } from 'react';

import InfoCard from '../components/InfoCard';
import CreatePage from '../components/forms/CreateForm';

const HomePage = () => {
  const [refresh, setRefresh] = useState(null);
  const [budgetCard, setBudgetCard] = useState([]);
  // const [total, setTotal] = useState(0);
  console.log(budgetCard);
  useEffect(() => {}, [refresh, budgetCard]);

  const total = budgetCard.reduce(
    (totalAmount, budget) => totalAmount + +budget.expense,
    0
  );
  console.log(total);
  return (
    <>
      <div className='title'>
        <span>Budget Your Spending</span>
      </div>
      <CreatePage budgetCard={budgetCard} setBudgetCard={setBudgetCard} />
      <div className='budgetCont'>
        <div className='budgetCard'>
          <span className='titleName'>Name:</span>
          <span className='titleExpense'>Expense:</span>
        </div>
      </div>
      <br />
      {budgetCard &&
        budgetCard.map((budget, index) => {
          return <InfoCard budget={budget} key={index} />;
        })}

      <div className='budgetCont'>
        <div className='budgetCard'>
          <span>Total:</span>
          <span>{total}</span>         
        </div>
      </div>
    </>
  );
};

export default HomePage;
