import React, { Component } from "react";
import hinh1 from "../assets/icons/icon-black.jpg";
import hinh2 from "../assets/icons/icon-red.jpg";
import hinh3 from "../assets/icons/icon-silver.jpg";
import hinh4 from "../assets/icons/icon-steel.jpg";
import hinh5 from "../assets/products/black-car.jpg";
export default class BaiTapChonXe extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <img src={hinh5} alt="black-car" style={{ width: "100%" }} />
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-3">
                  <img
                    src={hinh1}
                    alt="hinhDark"
                    className="img-fluid"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="col-9">
                  <h3>Crystal Black</h3>
                  <p>Pearl</p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <img
                    src={hinh2}
                    alt="hinhDark"
                    style={{ cursor: "pointer" }}
                    className="img-fluid"
                  />
                </div>
                <div className="col-9">
                  <h3>Crystal Black</h3>
                  <p>Pearl</p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <img src={hinh3} alt="hinhDark" className="img-fluid" />
                </div>
                <div className="col-9">
                  <h3>Crystal Black</h3>
                  <p>Pearl</p>
                </div>
              </div>
              <div className="row" style={{ cursor: "pointer" }}>
                <div className="col-3">
                  <img src={hinh4} alt="hinhDark" className="img-fluid" />
                </div>
                <div className="col-9">
                  <h3>Crystal Black</h3>
                  <p>Pearl</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
