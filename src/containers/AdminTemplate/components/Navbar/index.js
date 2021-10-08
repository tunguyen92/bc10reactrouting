import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { actLogout } from "../../Auth/modules/actions";
import { connect } from "react-redux";

class NavbarAdmin extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/add-user"
              >
                Add User
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-danger"
                onClick={() => {
                  //dispatch action logout
                  this.props.logout(this.props.history);
                }}
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => {
      dispatch(actLogout(history));
    },
  };
};

const ConnectedComponent = connect(null, mapDispatchToProps)(NavbarAdmin);

export default withRouter(ConnectedComponent);
