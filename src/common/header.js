import React, { useState } from "react";
import "../App.css";
import "./header.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import List from "../pages/List";
import App from "../App";

function Header() {
  const [search, setSearch] = useState(null);
  const handleSubmit = (event) => {
    if (search == null) {
      alert("검색어는 입력하셔야죠!!");
      console.log("none");
    } else {
    }
  };

  return (
    <div className="Header">
      <div className="global-padding">
        <div className="header-buttons">
          <a href="http://nanobyte.iptime.org" target="_blank">
            NB
          </a>
          <div className="maintitle">Download Center</div>
          <form className="formSearch" onSubmit={handleSubmit}>
            <input
              name="search"
              type="search"
              className="inputSearch"
              placeholder="검색어를 입력하세요"
              //   value={startnum}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="submitSearch">
              검색
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
