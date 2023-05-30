import React, { useEffect, useState } from "react";
// import "../styles/app.css";
import Damage from "./Damage"; //ダメージを記入する欄
import EnergyCost from "./EnergyCost"; //消費エネルギー数を指定する欄
import Button from "./Button"; //検索ボタン
import Result from "./Result"; //結果表示一覧

export default function App() {
  // useState
  const [currentView, viewSet] = useState("AllPhotos");
  const [phots, photSet] = useState([]);
  const [selectedPhots, selectPhotSet] = useState("");

  useEffect(() => {}, []);
  return (
    <>
      <Damage
      // currentView={currentView}
      />
      <EnergyCost
      // phots={phots}
      />
      <Button
      // phots={phots}
      />
      <Result
      // phots={phots}
      />
    </>
  );
}
