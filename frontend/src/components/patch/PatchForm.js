import React, { useState } from "react";
import Axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ROOT_ADDRESS = "http://localhost:5000/orders/";

const PatchForm = ({ polling, setPolling, patchClose, orderObject }) => {
  //States
  const [date, setDate] = useState(new Date(orderObject.deadline));

  // Functions
  const onChangeDate = (date) => {
    setDate(date);
  };

  const patchMe = (event) => {
    event.preventDefault(event);

    // Submission Objects
    const titleSubmission = { title: event.target.title.value };
    const customerSubmission = { customer: event.target.customer.value };
    const descSubmission = { description: event.target.desc.value };
    const quantitySubmission = { quantity: event.target.quantity.value };
    const priceSubmission = { price: event.target.price.value };
    const todoSubmission = {
      todo: {
        polishing: event.target.polishing.checked,
        sizing: event.target.sizing.checked,
        lazer: event.target.lazer.checked,
        engraving: event.target.engraving.checked,
        plating: event.target.plating.checked,
        rhodium: event.target.rhodium.checked,
        cleaning: event.target.cleaning.checked,
      },
    };
    const deadlineSubmission = { deadline: date.toISOString() };
    const notesSubmission = { notes: event.target.notes.value };

    // Title
    Axios.patch(ROOT_ADDRESS + "title/" + orderObject._id, titleSubmission)
      .then(function () {
        if (titleSubmission.title !== orderObject.title) {
          console.log("New title!");
        }
        setPolling(!polling);
      })
      .catch(function (error) {
        console.log(error);
      });

    // Customer
    Axios.patch(
      ROOT_ADDRESS + "customer/" + orderObject._id,
      customerSubmission
    )
      .then(function () {
        if (customerSubmission.customer !== orderObject.customer) {
          console.log("New customer!");
        }
        setPolling(!polling);
      })
      .catch(function (error) {
        console.log(error);
      });

    // Description
    Axios.patch(ROOT_ADDRESS + "desc/" + orderObject._id, descSubmission)
      .then(function () {
        if (descSubmission.description !== orderObject.description) {
          console.log("New description!");
        }
        setPolling(!polling);
      })
      .catch(function (error) {
        console.log(error);
      });

    // Quantity
    Axios.patch(
      ROOT_ADDRESS + "quantity/" + orderObject._id,
      quantitySubmission
    )
      .then(function () {
        if (Number(quantitySubmission.quantity) !== orderObject.quantity) {
          console.log("New quantity!");
        }
        setPolling(!polling);
      })
      .catch(function (error) {
        console.log(error);
      });

    // Price
    Axios.patch(ROOT_ADDRESS + "price/" + orderObject._id, priceSubmission)
      .then(function () {
        if (Number(priceSubmission.price) !== orderObject.price) {
          console.log("New price!");
        }
        setPolling(!polling);
      })
      .catch(function (error) {
        console.log(error);
      });

    // Todo
    Axios.patch(ROOT_ADDRESS + "todo/" + orderObject._id, todoSubmission)
      .then(function () {
        if (titleSubmission !== orderObject.todo) {
          console.log("New todo!");
        }
        setPolling(!polling);
      })
      .catch(function (error) {
        console.log(error);
      });

    // Deadline
    Axios.patch(
      ROOT_ADDRESS + "deadline/" + orderObject._id,
      deadlineSubmission
    )
      .then(function () {
        if (deadlineSubmission.deadline !== orderObject.deadline) {
          console.log("New deadline!");
        }
        setPolling(!polling);
      })
      .catch(function (error) {
        console.log(error);
      });

    // Notes
    Axios.patch(ROOT_ADDRESS + "notes/" + orderObject._id, notesSubmission)
      .then(function () {
        if (notesSubmission.notes !== orderObject.notes) {
          console.log("New notes!");
        }
        setPolling(!polling);
      })
      .catch(function (error) {
        console.log(error);
      });

    patchClose();
  };

  return (
    <React.Fragment>
      <form onSubmit={patchMe}>
        <div>
          <label>Title</label>
          <input
            id="title"
            type="text"
            required
            defaultValue={orderObject.title}
          />
        </div>
        <div>
          <label>Customer</label>
          <input
            id="customer"
            type="text"
            required
            defaultValue={orderObject.customer}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            id="desc"
            type="text"
            required
            defaultValue={orderObject.description}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            id="quantity"
            type="text"
            required
            defaultValue={orderObject.quantity}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            id="price"
            type="text"
            required
            defaultValue={orderObject.price}
            // two decimal place max
            pattern="^\d*(\.\d{0,2})?$"
          />
        </div>
        <div>
          <label>
            Polishing
            <input
              type="checkbox"
              defaultChecked={orderObject.todo.polishing ? true : false}
              id="polishing"
            ></input>
          </label>
        </div>
        <div>
          <label>
            Sizing
            <input
              type="checkbox"
              defaultChecked={orderObject.todo.sizing ? true : false}
              id="sizing"
            ></input>
          </label>
        </div>
        <div>
          <label>
            Lazer
            <input
              type="checkbox"
              defaultChecked={orderObject.todo.lazer ? true : false}
              id="lazer"
            ></input>
          </label>
        </div>
        <div>
          <label>
            Engraving
            <input
              type="checkbox"
              defaultChecked={orderObject.todo.engraving ? true : false}
              id="engraving"
            ></input>
          </label>
        </div>
        <div>
          <label>
            Plating
            <input
              type="checkbox"
              defaultChecked={orderObject.todo.plating ? true : false}
              id="plating"
            ></input>
          </label>
        </div>
        <div>
          <label>
            Rhodium
            <input
              type="checkbox"
              defaultChecked={orderObject.todo.rhodium ? true : false}
              id="rhodium"
            ></input>
          </label>
        </div>
        <div>
          <label>
            Cleaning
            <input
              type="checkbox"
              defaultChecked={orderObject.todo.cleaning ? true : false}
              id="cleaning"
            ></input>
          </label>
        </div>
        <div>
          <label>Deadline</label>
          <div>
            <Calendar
              onChange={onChangeDate}
              value={date}
              calendarType="ISO 8601"
              minDate={new Date()}
            />
          </div>
        </div>
        <div>
          <label>Notes</label>
          <input
            id="notes"
            type="text"
            required
            defaultValue={orderObject.notes}
          />
        </div>
        <div>
          <button type="submit" value="Create New Order">
            Submit Edit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default PatchForm;
