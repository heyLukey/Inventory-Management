import React from "react";
import Axios from "axios";
const ROOT_ADDRESS = "http://localhost:5000/orders/";

const ToggleStatus = ({ polling, setPolling, orderObject }) => {
  // Toggle order status
  const patchStatus = () => {
    const statusSubmission = { active: !orderObject.active };
    Axios.patch(ROOT_ADDRESS + "status/" + orderObject._id, statusSubmission)
      .then(function (response) {
        console.log(response.data);
        setPolling(!polling);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <button onClick={patchStatus} className="patch-button">
        TOGGLE
      </button>
    </React.Fragment>
  );
};

export default ToggleStatus;
