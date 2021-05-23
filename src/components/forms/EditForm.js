import React, { useState } from 'react';

const CreatePage = ({ budgetCard, setBudgetCard }) => {
  const [editForm, setEditForm] = useState({
    name: '',
    expense: '',
  });

  const handleChange = (event) => {
    event.persist();
    setEditForm((editForm) => ({
      ...editForm,
      [event.target.name]: event.target.value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();

    setBudgetCard([...budgetCard, editForm]);
    setEditForm({
      name: '',
      expense: '',
    });
  }

  return (
    <div className='card-footer'>
      <div className='input-group mb-3'>
        <input
          type='text'
          name='name'
          className='form-control type_msg'
          placeholder='Add Name'
          value={editForm.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='expense'
          className='form-control type_msg'
          placeholder='Add Expense'
          value={editForm.expense}
          onChange={handleChange}
        />
        <span
          type='submit'
          onClick={handleSubmit}
          className='input-group-text send_btn'
        >
          <i className='fas fa-plus-circle'></i>
        </span>
      </div>
    </div>
  );
};

export default CreatePage;
