import React from "react";
import NavbarAdmin from "./components/Navbar";
import { Route } from "react-router-dom";

function LayoutAdmin(props) {
  return (
    <>
      <NavbarAdmin />
      {props.children}
    </>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      //{...props} có exact và path
      {...props}
      render={(propsRoute) => (
        <LayoutAdmin>
          <Component {...propsRoute} />
        </LayoutAdmin>
      )}
    />
  );
}
