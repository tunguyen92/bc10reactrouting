import React, { Component } from "react";
import Loader from "../../../component/Loader";
import { actFetchDetailMovie } from "./modules/actions";
import { connect } from "react-redux";

class DetailMoviePage extends Component {
  componentDidMount() {
    //Nhận lại id từ url
    const id = this.props.match.params.id;
    this.props.fetchDetailMovie(id);
  }

  renderTable = () => {
    const { data } = this.props;
    return data?.lichChieu?.map((item) => {
      return (
        <tr key={item.maLichChieu}>
          <td>{item.thongTinRap.tenCumRap}</td>
          <td>{item.thongTinRap.tenRap}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
          <td>
            <a href="#dat-ve" className="btn btn-success">
              Đặt vé
            </a>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container">
        <h3>DetailMoviePage</h3>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={data && data.hinhAnh} alt="" />
          </div>
          <div className="col-md-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Tên phim</td>
                  <td>{data && data.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mô tả</td>
                  <td>{data && data.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Cụm rạp</th>
                  <th>Tên rạp</th>
                  <th>Ngày chiếu</th>
                  <th>Giờ chiếu</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    data: state.detailMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailMovie: (id) => {
      dispatch(actFetchDetailMovie(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
