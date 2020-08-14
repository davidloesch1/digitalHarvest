import React from "react";
import "../App.css";

function Header() {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Hello DH Team!</h1>
        <p className="lead">
          If you're looking for a full-stack React developer that goes above and
          beyond, I hope this fits!
        </p>
        <hr className="my-4" />
        <p>
          Read my recount of our conversation, and why I felt it necessary to
          deliver the "whoa" factor.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Click here for Conversation Reflection
        </a>
      </div>
    </>
  );
}
export default Header;
