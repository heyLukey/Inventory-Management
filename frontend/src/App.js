import React, { useState, useEffect } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

// Import Modal Components
import PostModal from "./components/post/PostModal";

// Import Order Componenets
import OrderList from "./components/order/OrderList";
import NavBar from "./components/navbar/NavBar";
import Download from "./components/Download";

const ORDER_ADDRESS = "http://localhost:5000/orders/";

function App() {
  // States
  const [modalOpen, setModalOpen] = useState(false);
  const [polling, setPolling] = useState(false);
  const [isDescending, setIsDescending] = useState(true);

  // Order Display
  const [filter, setFilter] = useState("all");
  const [displayOrders, setDisplayOrders] = useState([]);

  // Effects
  useEffect(() => {
    const chooseDisplay = () => {
      Axios.get(ORDER_ADDRESS + filter)
        .then((response) => {
          setDisplayOrders(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    chooseDisplay();
  }, [filter, polling, isDescending]);

  // Functions
  const compareDateDesc = (a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  };

  const compareDateAsc = (a, b) => {
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
    return 0;
  };

  // TURN INTO CHECKBOX, USEEFFECT TO REAPPLY IF ACTIVE ON ANY POLLING
  const filterLazer = () => {
    let lazerDone = displayOrders.filter(function (order) {
      return order.todo.lazer === true;
    });
    setDisplayOrders(lazerDone);
  };

  const printDisplayArray = () => {
    console.log(displayOrders);
  };

  return (
    <div className="App">
      <button onClick={filterLazer}>FILTER LAZER</button>
      <button onClick={printDisplayArray}>PRINT DISPLAY ARRAY</button>
      <Download />
      <PostModal
        polling={polling}
        setPolling={setPolling}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
      <NavBar
        setModalOpen={setModalOpen}
        setFilter={setFilter}
        isDescending={isDescending}
        setIsDescending={setIsDescending}
      />
      <OrderList
        polling={polling}
        setPolling={setPolling}
        displayOrders={
          isDescending
            ? displayOrders.sort(compareDateDesc)
            : displayOrders.sort(compareDateAsc)
        }
      />
    </div>
  );
}

export default App;
