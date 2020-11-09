import React from "react";
import Axios from "axios";
import FileDownload from "js-file-download";

const CSV_ADDRESS = "http://localhost:5000/csv/";

const Download = () => {
  // Download Mongo as CSV
  const csvDownload = () => {
    Axios.get(CSV_ADDRESS + "write")
      .then((response) => {
        console.log("File Downloaded!");
        FileDownload(response.data, "report.csv");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <button onClick={csvDownload}>Download</button>
    </React.Fragment>
  );
};

export default Download;
