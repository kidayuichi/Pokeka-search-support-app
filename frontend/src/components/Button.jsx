import React from "react";
import "../styles/button.css";
// import _ from "lodash";

export default function Button(props) {
  //   const viewChange = () => {
  //     props.viewSet("AllPhotos");
  //     console.log(props.currentView);
  //   };
  return (
    <>
      <div className="button" onClick={viewChange}></div>
    </>
  );
}
