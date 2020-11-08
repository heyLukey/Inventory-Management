import React, { useState } from "react";
import PatchModal from "./PatchModal";

const PatchButton = ({ polling, setPolling, orderObject }) => {
  // States
  const [patchOpen, setPatchOpen] = useState(false);

  // Functions
  const patchOpenButton = () => {
    setPatchOpen(true);
  };

  return (
    <React.Fragment>
      <PatchModal
        polling={polling}
        setPolling={setPolling}
        setPatchOpen={setPatchOpen}
        patchOpen={patchOpen}
        orderObject={orderObject}
      />
      <button onClick={patchOpenButton} className="patch-button">
        EDIT
      </button>
    </React.Fragment>
  );
};

export default PatchButton;
