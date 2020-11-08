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
      description: event.target.desc.value,
      quantity: event.target.quantity.value,
      deadline: date.toISOString(),
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
    console.log(orderSubmission.todo);

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
        <div className="form-group">
          <label>Title</label>
          <input
            id="title"
            type="text"
            required
            className="form-control"
            placeholder="title"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            id="desc"
            type="text"
            required
            className="form-control"
            placeholder="description"
          />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            id="quantity"
            type="text"
            required
            className="form-control"
            placeholder="1"
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
        <div className="form-group">
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
        <div className="form-group">
          <button
            type="submit"
            value="Create New Order"
            className="btn btn-primary"
          >
            Create New Order
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default PostForm;
