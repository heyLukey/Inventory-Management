import React from "react";
import Order from "./Order";

const OrderList = ({ polling, setPolling, displayOrders }) => {
  return (
    <React.Fragment>
      <div className="order-container">
        <ul className="order-list">
          {displayOrders.map((orderObject) => (
            <Order
              polling={polling}
              setPolling={setPolling}
              orderObject={orderObject}
              key={orderObject._id}
            />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default OrderList;
