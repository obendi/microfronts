import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Root(props) {
  return (
    <Router>
      <section>Hello {props.name.toUpperCase()} (ReactJS)</section>
      <div>
        <ul>
          <li>
            <Link to="/account">List</Link>
          </li>
          <li>
            <Link to="/account/detail">Detail</Link>
          </li>
          <li>
            <Link to="/account/help">Help</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/account" element={<List />} />
          <Route path="/account/detail" element={<Detail />} />
          <Route path="/account/help" element={<Help />} />
        </Routes>
      </div>
    </Router>
  );
}

function List() {
  return (
    <div>
      <h2>List</h2>
    </div>
  );
}

function Detail() {
  return (
    <div>
      <h2>Detail</h2>
    </div>
  );
}

function Help() {
  return (
    <div>
      <h2>Help</h2>
    </div>
  );
}
