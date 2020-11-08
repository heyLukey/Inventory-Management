import React from "react";
import Axios from "axios";

const ROOT_ADDRESS = "http://localhost:5000/orders/";
const DeleteContent = ({ deleteClose, orderObject, setPolling, polling }) => {
  // Functions
  const deleteMe = () => {
    console.log(orderObject._id);

    const recycledSubmission = { recycled: true };

    Axios.patch(
      ROOT_ADDRESS + "recycled/" + orderObject._id,
      recycledSubmission
    )
      .then(function (response) {
        if (recycledSubmission.recycled !== orderObject.recycled) {
          console.log("Order has been recycled!");
          console.log(response.data);
        }
        setPolling(!polling);
      })
      .catch(function (error) {
        console.log(error);
      });

    // Axios.delete(DELETE_ADDRESS + orderObject._id)
    //   .then(function (response) {
    //     console.log("Order deleted!");
    //     console.log(response.data);
    //     setPolling(!polling);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    deleteClose();
  };

  return (
    <React.Fragment>
      <p>Are you sure you want to delete '{orderObject.title}'?</p>
      <button onClick={deleteMe}>Yes</button>
      <button onClick={deleteClose}>No</button>
    </React.Fragment>
  );
};

export default DeleteContent;
