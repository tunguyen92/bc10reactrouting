import React from "react";
import Navbar from "./_components/Navbar";
import { Route } from "react-router-dom";

function LayoutHome(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default function HomeTemplate(props) {
  const { exact, path, Component } = props;
  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={Component} />
    </LayoutHome>
  );
}
