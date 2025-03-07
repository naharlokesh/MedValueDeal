import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function ResponsiveNavbar(props) {
  const history = useNavigate();

  const handlelogout = () => {
    signOut(auth).then((val) => {
      history("/Login");
    });
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#91d7d3" }}
      className="p-3"
    >
      <Link className="nav-link" to="/">
        <img
          src="./favicon1.ico"
          alt="MedvalueDeal Logo"
          style={{ width: "61px", height: "30px", marginRight: "10px" }}
        />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/Home" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
            Home
          </Link>
          <Link className="nav-link" to="/Medicine" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
            Medicine
          </Link>
          <Link className="nav-link" to="/LabTest" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
            LabTest
          </Link>
          <Link className="nav-link" to="/HealthCare" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
            HealthCare
          </Link>
          <div className="med-rush-container">
            <Link className="nav-link med-rush-link" to="/MedRush" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
              MedRush
            </Link>
            <span className="new-feature-tag" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>New Feature</span>
          </div>
        </Nav>
        <Form className="d-flex features">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>Search</Button>
        </Form>
        <div
          className="Username"
          style={{
            color: "black",
            fontFamily: "unset",
            fontSize: "18px",
            marginRight: "15px",
            marginLeft: "15px",
            fontWeight:"bold",
          }}
        >
          &nbsp; Welcome {props.name}
        </div>
        <Nav className="me-auto features">
          {/* <Link className="nav-link" to="/More">More</Link> */}
          <Link className="nav-link" to="/Prescription" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
            Order Via Prescription
          </Link>
          <Link className="nav-link" to="/Cart" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
            {" "}
            cart <i class="bi bi-cart-x-fill"></i>
          </Link>

          <NavDropdown 
            title={
              <i
                className="bi bi-person-circle"
                style={{ fontSize: "1.4 rem" }}
              ></i>
            }
            id="collasible-nav-dropdown"
            style={{ minWidth: "50px", maxWidth: "50px", maxHeight: "10px" }} 
        
          >
            {!props.name && (
              <Link className="nav-link" to="/Login" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
                Login {" "}<i class="bi bi-door-open-fill"></i>
              </Link>
            )}
            {!props.name && (
              <Link className="nav-link" to="/Signup" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
                Signup{" "}<i class="bi bi-person-raised-hand"></i>
              </Link>
            )}
            {props.name && (
              <Link className="nav-link" to="/Logout" style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }} onClick={handlelogout}>
                Logout <i class="bi bi-box-arrow-left"></i>
              </Link>
            )}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default ResponsiveNavbar;
