import React, { useState } from "react";
import Axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const POST_ADDRESS = "http://localhost:5000/orders/create";

const PostForm = ({ polling, setPolling, modalClose }) => {
  //States
  const [date, setDate] = useState(new Date());

  // Functions
  const onChangeDate = (date) => {
    setDate(date);
  };

  const postMe = (event) => {
    event.preventDefault(event);

    const orderSubmission = {
      title: event.target.title.value,
      customer: event.target.customer.value,
      description: event.target.desc.value,
      quantity: event.target.quantity.value,
      price: event.target.price.value,
      todo: {
        polishing: !event.target.polishing.checked,
        sizing: !event.target.sizing.checked,
        lazer: !event.target.lazer.checked,
        engraving: !event.target.engraving.checked,
        plating: !event.target.plating.checked,
        rhodium: !event.target.rhodium.checked,
        cleaning: !event.target.cleaning.checked,
      },
      deadline: date.toISOString(),
      notes: event.target.notes.value,
    };
    console.log(orderSubmission);

    Axios.post(POST_ADDRESS, orderSubmission)
      .then(function (response) {
        console.log("Order created!");
        console.log(response.data);
        setPolling(!polling);
      })
      .catch(function (error) {
        console.log(error);
      });

    modalClose();
  };

  return (
    <React.Fragment>
      <form onSubmit={postMe}>
        <div>
          <label>Customer</label>
          <input id="customer" type="text" required placeholder="customer" />
        </div>
        <div>
          <label>Title</label>
          <input id="title" type="text" required placeholder="title" />
        </div>
        <div>
          <label>Description</label>
          <input id="desc" type="text" required placeholder="description" />
        </div>
        <div>
          <label>Quantity</label>
          <input id="quantity" type="text" required placeholder="1" />
        </div>
        <div>
          <label>Price</label>
          <input
            id="price"
            type="text"
            required
            placeholder="0.00"
            pattern="^\d*(\.\d{0,2})?$"
          />
        </div>
        <div>
          <label>
            Polishing
            <input type="checkbox" id="polishing"></input>
          </label>
        </div>
        <div>
          <label>
            Sizing
            <input type="checkbox" id="sizing"></input>
          </label>
        </div>
        <div>
          <label>
            Lazer
            <input type="checkbox" id="lazer"></input>
          </label>
        </div>
        <div>
          <label>
            Engraving
            <input type="checkbox" id="engraving"></input>
          </label>
        </div>
        <div>
          <label>
            Plating
            <input type="checkbox" id="plating"></input>
          </label>
        </div>
        <div>
          <label>
            Rhodium
            <input type="checkbox" id="rhodium"></input>
          </label>
        </div>
        <div>
          <label>
            Cleaning
            <input type="checkbox" id="cleaning"></input>
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
          <input id="notes" type="text" placeholder="notes" />
        </div>
        <div>
          <button type="submit" value="Create New Order">
            Create New Order
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default PostForm;
