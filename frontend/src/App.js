import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

// Import Components
import PostModal from "./components/post/PostModal";
import OrderList from "./components/order/OrderList";
import NavBar from "./components/navbar/NavBar";
import Download from "./components/Download";
import FilterContainer from "./components/filter/FilterContainer";
import SearchBar from "./components/SearchBar";

const ORDER_ADDRESS = "http://localhost:5000/orders/";

function App() {
  // States
  const [modalOpen, setModalOpen] = useState(false);
  const [polling, setPolling] = useState(false);
  const [isDescending, setIsDescending] = useState(true);
  const [conditions, setConditions] = useState({
    polishing: false,
    sizing: false,
    lazer: false,
    engraving: false,
    plating: false,
    rhodium: false,
    cleaning: false,
  });
  const [search, setSearch] = useState("");

  // Order Display
  const [filter, setFilter] = useState("all");
  const [displayOrders, setDisplayOrders] = useState([]);

  // Effects
  useEffect(() => {
    // Filter array of objects based on inclusion of substring in given element
    const tertiaryFilter = (arr) => {
      if (search === "") {
        return arr;
      } else {
        const arrFiltered = arr.filter(function (order) {
          return order.title.toLowerCase().includes(search);
        });
        return arrFiltered;
      }
    };

    // Compare array of objects to object of conditions
    // Filter for objects that fufill those conditions
    const secondaryFilter = (arr) => {
      let arrFiltered = arr;
      let inAction = false;
      Object.entries(conditions).forEach((element) => {
        if (element[1] === true) {
          arrFiltered = arrFiltered.filter(function (order) {
            return order.todo[element[0]] === true;
          });
          // If we reach this code then we have filtered
          inAction = true;
        }
      });
      if (inAction) {
        return arrFiltered;
      }
      // If no conditions are ticked return default array
      else {
        return arr;
      }
    };

    // Query Database for orders based on filter prereq
    const chooseDisplay = () => {
      Axios.get(ORDER_ADDRESS + filter)
        .then((response) => {
          // Filter the response before display
          const secResponse = secondaryFilter(response.data);
          const terResponse = tertiaryFilter(secResponse);
          setDisplayOrders(terResponse);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    // Run it up
    chooseDisplay();
  }, [filter, conditions, search, polling]);

  // Functions
  // Sort for descending date
  const compareDateDesc = (a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  };

  // Sort for ascending date
  const compareDateAsc = (a, b) => {
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
    return 0;
  };

  // Test Function
  const printDisplayArray = () => {
    console.log(displayOrders);
  };

  return (
    <div className="App">
      <button onClick={printDisplayArray}>DEV TEST BUTTON</button>
      <SearchBar search={search} setSearch={setSearch} />
      <Download />
      <FilterContainer conditions={conditions} setConditions={setConditions} />
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
