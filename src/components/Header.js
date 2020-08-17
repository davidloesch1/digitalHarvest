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
         Here is my weekend playaround with learning about GeoJSON objects, Shape files, and how to store them in a database
        </p>
        <a className="btn btn-primary btn-lg" href="/mapper" role="button">
          Polygon Mapper
        </a>
      </div>
    </>
  );
}
export default Header;
