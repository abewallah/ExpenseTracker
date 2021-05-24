import React, { useState, useEffect } from 'react';

import InfoCard from '../components/InfoCard';
import CreateForm from '../components/forms/CreateForm';

const HomePage = () => {
  const [refresh, setRefresh] = useState(null);
  const [budgetCard, setBudgetCard] = useState([]);
  const [budgetAmount, setBudgetAmount] = useState('0');
  useEffect(() => {}, [refresh, budgetCard]);

  const total = budgetCard.reduce(
    (totalAmount, budget) => totalAmount + +budget.expense,
    0
  );
  const handleBudgetAmountChange = (event) => {
    event.persist();
    setBudgetAmount(() => ({
      ...budgetAmount,
      [event.target.name]: event.target.value,
    }));
  };
  const handleBudgetAmountSubmit = (event) => {
    event.preventDefault();

    setBudgetAmount('');
  };
  return (
    <>
      <div className='title'>
        <span className='spanTitle'>Budget Your Spending</span>
      </div>
      <CreateForm budgetCard={budgetCard} setBudgetCard={setBudgetCard} />
      <div className='pieChart'></div>
      <div className='card-footer'>
        <div className='input-group mb-3'>
          <input
            id='budgetAmount'
            name='budgetAmount'
            className='form-control type_msg'
            type='text'
            placeholder='Whats your Budget?'
            value={budgetAmount}
            onChange={handleBudgetAmountChange}
          />
          <span
            type='submit'
            onClick={handleBudgetAmountSubmit}
            className='input-group-text send_btn'
          >
            <i className='fas fa-plus-circle'></i>
          </span>
        </div>
        <span className='text-white'>Your Budget Amount is:</span>
      </div>
      {total > budgetAmount && (
        <div className='alert alert-danger' role='alert'>
          {' '}
          You Have Exceeded your Budget
        </div>
      )}
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
