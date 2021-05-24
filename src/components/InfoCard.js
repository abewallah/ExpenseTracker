import EditForm from './forms/EditForm';

const InfoCard = ({ index, budget, budgetCard, setBudgetCard }) => {
  const toggleEditForm = () => {
    document.getElementById(`budgetCard${index}`).style.display = 'none';
    document.getElementById(`editForm${index}`).style.display = 'block';
  };

  return (
    <>
      <div className='budgetCont'>
        <div id={`budgetCard${index}`} className='budgetCard'>
          <span>{budget.name}</span>
          <span>{budget.expense}</span>
        </div>
        <EditForm
          index={index}
          budgetCard={budgetCard}
          setBudgetCard={setBudgetCard}
          budget={budget}
        />
        <span onClick={() => toggleEditForm()}>
          <i className='fas fa-marker'></i>
        </span>
        <i className='fas fa-trash-alt'></i>
      </div>
      <hr />
      <br />
    </>
  );
};

export default InfoCard;
