import React, { Component } from "react";
import CarsList from "../data/arrayFeatures.json";
import WheelList from "../data/wheels.json";
export default class BaiTapXeHoi extends Component {
  state = {
    CarCurrent: {
      id: 1,
      title: "Crystal Black",
      type: "Pearl",
      img: "./images/icons/icon-black.jpg",
      srcImg: "images-black/images-black-1/",
      color: "Black",
      price: "19,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-black/images-black-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-black/images-black-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-black/images-black-3/",
        },
      ],
    },
  };

  changeCar = (newCarChange) => {
    this.setState({
      CarCurrent: newCarChange,
    });
  };
  //   https://cdn.scaleflex.it/filerobot/js-cloudimage-responsive/lazysizes.min.js?v4.1.6
  renderIcon = () => {
    return CarsList.map((item, index) => {
      return (
        <div
          className="row border align-items-center m-1 p-2"
          style={{ cursor: "pointer" }}
          key={index}
          onClick={() => {
            this.changeCar(item);
          }}
        >
          <div className="col-3">
            <img src={item.img} alt="hinh" style={{ width: "100%" }} />
          </div>
          <div className="col-9">
            <h5>{item.title}</h5>
            <p>{item.type}</p>
          </div>
        </div>
      );
    });
  };
  renderWheel = () => {
    return WheelList.map((value, index) => {
      return (
        <div
          className="row border p-3 m-2"
          key={index}
          style={{ cursor: "pointer" }}
        >
          <div className="col-3">
            <img src={value.img} alt="hinh anh" style={{ width: "100%" }} />
          </div>
          <div className="col-9">
            <span style={{ fontSize: "12px" }}>{value.title}</span>
          </div>
        </div>
      );
    });
  };
  componentDidMount = () => {
    let tagScript = document.createElement("script");
    tagScript.src =
      "https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy";

    document.getElementById("appendIt").appendChild(tagScript);
  };

  componentDidUpdate = () => {
    let tagScript = document.createElement("script");
    tagScript.src =
      "https://cdn.scaleflex.it/filerobot/js-cloudimage-responsive/lazysizes.min.js?v4.1.6";

    document.getElementById("appendIt").appendChild(tagScript);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div
                style={{ minWidth: "100%" }}
                className="cloudimage-360"
                id="gurkha-suv"
                data-folder={"./images/" + this.state.CarCurrent.srcImg}
                data-filename-x="civic-{index}.jpg"
                data-amount-x={8}
              />
              <div id="appendIt"></div>
              <table className="table border border-default mt-2">
                <thead className="bg-light">
                  <tr>
                    <th>Exterior color</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">Color</td>
                    <td>Black</td>
                  </tr>
                  <tr>
                    <td className="border">Price</td>
                    <td>$19,000,000</td>
                  </tr>
                  <tr>
                    <td className="border">Engine Type</td>
                    <td>INLINE</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="card" style={{ width: "100%" }}>
                <div className="card-header">
                  <h5>Extierior color</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{this.renderIcon()}</li>
                </ul>
              </div>
              <div className="card mt-3" style={{ width: "100%" }}>
                <div className="card-header">
                  <h5>Wheels</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{this.renderWheel()}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
