import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Nav,
  Button,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { DummyLogo } from "../../assets/images/svg";
import { toast } from "react-hot-toast";

export const Dashboard = (props) => {
  let navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  // logout condition
  const logOut = () => {
    localStorage.removeItem("loginData");
    navigate("/login");
    toast.success(`Logout Successfully`);
  };
  let authenticated;
  const Username = localStorage.getItem("loginData");
  if (Username) {
    authenticated = JSON.parse(Username);
  }
  return (
    <>
      <header>
        <Navbar container="lg" expand="md" light>
          <div className="navbar-brand">
            <h3 className="mb-0">
              <NavLink className="nav-link" to="/dashboard">
                <DummyLogo />
              </NavLink>
            </h3>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            <div>
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </div>
          </button>
          <Collapse navbar className={sidebarVisible ? "active" : ""}>
            <Nav className="ms-auto" navbar>
              <NavItem className="d-inline d-md-none sideheader-li">
                <div className="sideheader">
                  <div className="one">
                    <h3 className="mb-0">React</h3>
                  </div>
                  <div className="two">
                    <Button
                      className="btn-icon"
                      color="primary"
                      type="button"
                      onClick={() => setSidebarVisible(!sidebarVisible)}
                    >
                      <IoClose size="18" />
                    </Button>
                  </div>
                </div>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/blogs">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                className="d-md-inline-block d-none"
                inNavbar
                nav
              >
                <DropdownToggle caret nav>
                  <div className="avatar-data">
                    <div className="one">
                      {authenticated.username.charAt(0)}
                    </div>
                    <div className="two">{authenticated.username}</div>
                  </div>
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem tag={Link} to="/profile">Profile</DropdownItem>
                  <DropdownItem tag={Link} to="/account">Account</DropdownItem>
                  <DropdownItem tag={Link} to="/settings">settings</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => logOut()}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          {/* Mega menu */}
        </Navbar>
      </header>
    </>
  );
};

export default Dashboard;
