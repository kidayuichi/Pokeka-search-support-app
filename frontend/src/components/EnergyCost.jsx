import React from "react";
import "../styles/energyCost.css";
// import _ from "lodash";

export default function EnergyCost(props) {
  //   const viewChange = () => {
  //     props.viewSet("AllPhotos");
  //     console.log(props.currentView);
  //   };
  return (
    <>
      <div className="energyCost" onClick={viewChange}>
        EnergyCost
      </div>
    </>
  );
}
