import React, { useState } from "react";
import DeleteButton from "../delete/DeleteButton";
import PatchButton from "../patch/PatchButton";
import OrderContent from "./OrderContent";
import ToggleStatus from "./ToggleStatus";

const Order = ({ polling, setPolling, orderObject }) => {
  // States
  const [open, setOpen] = useState(false);

  // Functions
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <div className="accordion-section">
        <div className={open ? "accordion-top-open" : "accordion-top-closed"}>
          <button onClick={toggleOpen} className="accordion-title">
            {orderObject.title}
          </button>
          <ToggleStatus
            polling={polling}
            setPolling={setPolling}
            orderObject={orderObject}
          />
          <PatchButton
            polling={polling}
            setPolling={setPolling}
            orderObject={orderObject}
          />
          <DeleteButton
            polling={polling}
            setPolling={setPolling}
            orderObject={orderObject}
          />
          <button
            onClick={toggleOpen}
            className={open ? "accordion-icon rotate" : "accordion-icon"}
          >
            &lt;
          </button>
        </div>
        {open ? <OrderContent orderObject={orderObject} /> : null}
      </div>
    </React.Fragment>
  );
};

export default Order;
