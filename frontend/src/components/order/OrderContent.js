import React from "react";

const OrderContent = ({ orderObject }) => {
  // Functions
  const dateConverter = (date) => {
    const convDate = new Date(date);
    const asString = convDate.toLocaleDateString();
    return asString;
  };

  // Check if there are any notes
  const noteCheck = () => {
    if (orderObject.notes === "") {
      return "N/A";
    } else {
      return orderObject.notes;
    }
  };

  return (
    <React.Fragment>
      <div className="accordion-content">
        <ul>
          <li>CUSTOMER : {orderObject.customer}</li>
          <li>DESCRIPTION : {orderObject.description}</li>
          <li>QUANTITY : {orderObject.quantity}</li>
          <li>PRICE : £{orderObject.price}</li>
          <ul className="todo">
            <li>
              POLISHING : {orderObject.todo.polishing ? "DONE" : "IN PROGRESS"}
            </li>
            <li>SIZING : {orderObject.todo.sizing ? "DONE" : "IN PROGRESS"}</li>
            <li>LAZER : {orderObject.todo.lazer ? "DONE" : "IN PROGRESS"}</li>
            <li>
              ENGRAVING : {orderObject.todo.engraving ? "DONE" : "IN PROGRESS"}
            </li>
            <li>
              PLATING : {orderObject.todo.plating ? "DONE" : "IN PROGRESS"}
            </li>
            <li>
              RHODIUM : {orderObject.todo.rhodium ? "DONE" : "IN PROGRESS"}
            </li>
            <li>
              CLEANING : {orderObject.todo.cleaning ? "DONE" : "IN PROGRESS"}
            </li>
          </ul>
          <li>CREATED : {dateConverter(orderObject.created)}</li>
          <li>DEADLINE : {dateConverter(orderObject.deadline)}</li>
          <li>NOTES : {noteCheck()}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default OrderContent;
