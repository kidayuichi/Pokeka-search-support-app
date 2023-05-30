import React from "react";
import "../styles/damage.css";
// import _ from "lodash";

export default function Damage(props) {
  //   const viewChange = () => {
  //     props.viewSet("AllPhotos");
  //     console.log(props.currentView);
  //   };
  return (
    <>
      <div className="damage" onClick={viewChange}>
        Damage
      </div>
    </>
  );
}
