import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
       
      <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bootstrap demo</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
    crossOrigin="anonymous"
  />
  <nav
    className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
    data-bs-theme="dark"
  >
    <div className="container-fluid">
      <a style={{ color: "white" }} className="navbar-brand" href="#">
        <i className="bi bi-coin" /> Expense Management System
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              style={{ color: "green" }}
              className="nav-link active"
              aria-current="page"
              to="/"
            >
              <i className="bi bi-house-fill"/> <b>Home</b>{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ color: "white" }}
              className="nav-link active"
              aria-current="page"
              to="/about"
            >
              <i className="bi bi-info-square-fill" /> About
            </Link>
          </li>
        </ul>
        <li className="nav-item">
        
                {" "}
                
                <p className="nav-link"  style={{ color: "white" }}><i class="bi bi-person-circle"></i>{loginUser && loginUser.name}</p>{" "}

              </li>
        <form className="d-flex" role="search">
          
          <button className="btn btn-primary mx-2" onClick={logoutHandler}> Logout</button>
        </form>
      </div>
    </div>
  </nav>
  <center>
    <div className="content">
      <img
        src="https://s1.eestatic.com/2015/02/27/elandroidelibre/el_androide_libre_14259080_179507479_1706x960.jpg"
        style={{ width: "50%" }}
        alt=""
      />
    </div>
  </center>
</>



    </>
  );
};

export default Header;
