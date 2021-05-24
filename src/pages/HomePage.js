import React, { useState, useEffect } from 'react';

import InfoCard from '../components/InfoCard';
import CreateForm from '../components/forms/CreateForm';

const HomePage = () => {
  const [refresh, setRefresh] = useState(null);
  const [budgetCard, setBudgetCard] = useState([]);
  useEffect(() => {}, [refresh, budgetCard]);

  const total = budgetCard.reduce(
    (totalAmount, budget) => totalAmount + +budget.expense,
    0
  );

  return (
    <>
      
        <div className='title'>
          <span className='spanTitle'>Budget Your Spending</span>
        </div>
        <CreateForm budgetCard={budgetCard} setBudgetCard={setBudgetCard} />
        <div className='pieChart'></div>
      
      <div className='mainCont'>
        <div className='budgetCont'>
          <div className='budgetCard'>
            <span className='titleName'>Item:</span>
            <span className='titleExpense'>Expense:</span>
          </div>
        </div>
        <br />
        <div className='itemCont'>
          {budgetCard &&
            budgetCard.map((budget, index) => {
              return (
                <InfoCard
                  budget={budget}
                  key={index}
                  setBudgetCard={setBudgetCard}
                  budgetCard={budgetCard}
                />
              );
            })}
        </div>

        <div className='budgetCont totalCont'>
          <div className='budgetCard'>
            <span>Total:</span>
            <span>{total}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
