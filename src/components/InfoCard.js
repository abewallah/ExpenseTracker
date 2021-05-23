const InfoCard = ({ budget }) => {
  return (
    <>
      <div className='budgetCont'>
        <div className='budgetCard'>
          <span>{budget.name}</span>
          <span>{budget.expense}</span>
        </div>

        <i className='fas fa-marker'></i>
        <i className='fas fa-trash-alt'></i>
      </div>
    </>
  );
};

export default InfoCard;
