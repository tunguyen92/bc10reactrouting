import React, { Component } from "react";
import WithCard from "./WithCard";
// import NhanVien from "./NhanVien";
import SanPham from "./SanPham";

const WrapperCard = WithCard(SanPham);

export default class HOCPage extends Component {
  render() {
    return (
      <div>
        <h3>HOC Page</h3>
        <WrapperCard />
      </div>
    );
  }
}
