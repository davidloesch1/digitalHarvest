import React from "react";
import "../App.css";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        Digital Harvest
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/mapper">
              Mapper
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
