import React, { useEffect } from "react";
export default function Result(props) {
    const data = props.resultNum
    return (
        <div></div>
    );
}


export const columns = [
    { Header: "名前", accessor: "name" },
    { Header: "ダメージ1", accessor: "Attack1damage" },
    { Header: "技名称1", accessor: "Attack1name" },
    { Header: "消費エネルギー1", accessor: "Attack1energy1" },
    { Header: "消費エネルギー2", accessor: "Attack1energy2" },
    { Header: "消費エネルギー3", accessor: "Attack1energy3" },
    { Header: "消費エネルギー4", accessor: "Attack1energy4" },
    { Header: "消費エネルギー5", accessor: "Attack1energy5" },
    { Header: "ダメージ2", accessor: "Attack2damage" },
    { Header: "技名称2", accessor: "Attack2name" },
    { Header: "消費エネルギー1", accessor: "Attack2energy1" },
    { Header: "消費エネルギー2", accessor: "Attack2energy2" },
    { Header: "消費エネルギー3", accessor: "Attack2energy3" },
    { Header: "消費エネルギー4", accessor: "Attack2energy4" },
    { Header: "消費エネルギー5", accessor: "Attack2energy5" },
];
export const data = [{
    "cardID": 40000,
    "name": "ルージュラ",
    "cardURL": "https://www.pokemon-card.com/card-search/details.php/card/40000/regu/XY",
    "Attack1name": "げんわくダンス",
    "Attack1damage": "30",
    "Attack1energy1": "icon-psychic icon",
    "Attack1energy2": "icon-none icon",
    "Attack1energy3": "",
    "Attack1energy4": "",
    "Attack1energy5": ""
}];