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
      <div>
        <button className="search" id="search">
          検索
        </button>
        <button className="reset" id="reset">
          リセット
        </button>
      </div>
    </>
  );
}
