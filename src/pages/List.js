import React, { useState } from "react";
import "../App.css";
import Header from "../common/header";
import productData from "./list.json";

function TOC(props) {
  var lists = [];
  var data = props.data;
  var i = 0;
  while (i < data.length) {
    lists.push(
      <li key={data[i].id}>
        <a href={"/products/" + data[i].code}>{data[i].title}</a>
      </li>
    );
    i = i + 1;
  }
  return (
    <div>
      <ul>{lists}</ul>
    </div>
  );
}

function List() {
  const [mode, setMode] = useState("welcome");
  const [contents, setContents] = useState([
    {
      id: 1,
      code: "escapefromddong",
      title: "똥피하기 레전드",
      desc: "하늘에서 떨어지는 똥을 피하세요!!",
      category: "Game",
    },
    {
      id: 2,
      code: "todocli",
      title: "todo-cli",
      desc: "CLI에서 할 일을 쉽게 관리하세요",
      category: "App",
    },
  ]);
  return (
    <div>
      <TOC data={contents} />
    </div>
  );
}
export default List;
