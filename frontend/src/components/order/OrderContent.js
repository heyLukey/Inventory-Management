import React from "react";

const OrderContent = ({ orderObject }) => {
  // Functions
  const dateConverter = (date) => {
    const convDate = new Date(date);
    const asString = convDate.toLocaleDateString();
    return asString;
  };

  return (
    <React.Fragment>
      <div className="accordion-content">
        <ul>
          <li>DESCRIPTION : {orderObject.description}</li>
          <li>QUANTITY : {orderObject.quantity}</li>
          <ul className='todo'>
            <li>POLISHING : {orderObject.todo.polishing ? 'DONE' : 'IN PROGRESS'}</li>
            <li>SIZING : {orderObject.todo.sizing ? 'DONE' : 'IN PROGRESS'}</li>
            <li>LAZER : {orderObject.todo.lazer ? 'DONE' : 'IN PROGRESS'}</li>
            <li>ENGRAVING : {orderObject.todo.engraving ? 'DONE' : 'IN PROGRESS'}</li>
            <li>PLATING : {orderObject.todo.plating ? 'DONE' : 'IN PROGRESS'}</li>
            <li>RHODIUM : {orderObject.todo.rhodium ? 'DONE' : 'IN PROGRESS'}</li>
            <li>CLEANING : {orderObject.todo.cleaning ? 'DONE' : 'IN PROGRESS'}</li>
          </ul>
          <li>CREATED : {dateConverter(orderObject.date)}</li>
          <li>DEADLINE : {dateConverter(orderObject.deadline)}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default OrderContent;
