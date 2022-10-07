import React, { Component } from "react";
import GlassList from "../data/dataGlasses.json";
import "../BaiTapThuKinh/BaiTapThuKinh.css";
export default class BaiTapThuKinh extends Component {
  state = {
    glassesCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderHinhanh = () => {
    return GlassList.map((glassList, Index) => {
      return (
        <div className="m-1">
          <img
            onClick={() => {
              this.changeGlasses(glassList);
            }}
            src={glassList.url}
            alt="hinhanh"
            key={Index}
            style={{ width: "90px", cursor: "pointer", padding: "5px" }}
            className="border border-1"
          />
        </div>
      );
    });
  };

  changeGlasses = (newGlasses) => {
    this.setState({
      glassesCurrent: newGlasses,
    });
  };

  render() {
    const keyFrame = `@keyframes animateTest${Date.now()} {
        from{
            width: 0;
            transform: rotate(45deg)
        }
        to{
            width: 150px;
            transform: rotate(0deg)

        }
    }`;

    const styleGlass = {
      position: "absolute",
      top: "9.5%",
      left: " 33%",
      opacity: ".7",
    };

    const anhon = {
      width: "150px",
      animation: `animateTest${Date.now()} 2s`,
      transform: `rotate(0deg)`,
    };

    return (
      <div
        style={{
          backgroundImage: "url(../glassesImage/background.jpg)",
          height: "2000px",
          backgroundSize: "2000px",
          position: "relative",
        }}
      >
        <style>{keyFrame}</style>

        <div style={{ backgroundColor: "rgba(0,0,0,0.5)", height: "2000px" }}>
          <div
            className="navGlass"
            style={{ padding: "30px", backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            <h2 className="text-center text-light">Ứng Dụng Thử Kính</h2>
          </div>
        </div>
        <div
          classname="container"
          style={{ position: "absolute", top: "140px", left: "30%" }}
        >
          <div className="row justify-content-around">
            <div className="col-6 ">
              <img
                src="./glassesImage/model.jpg"
                alt="hinh1"
                style={{ width: "200px" }}
              />
            </div>
            <div className="col-6 ">
              <img
                src="./glassesImage/model.jpg"
                alt="hinh1"
                style={{ width: "200px" }}
                // className="styleGlass"
              />
            </div>
          </div>
        </div>
        <div className="glassModel" style={styleGlass}>
          <img
            src={this.state.glassesCurrent.url}
            alt="hinh Xe hoi1"
            style={anhon}
            // className="glassesStyle"
          />
          <div
            className="glassInfo"
            style={{
              backgroundColor: "orange",
              width: "200px",
              position: "absolute",
              top: "113px",
              left: "-19%",
            }}
          >
            <h3 className="text-primary">
              Tên Kính:
              <span style={{ fontSize: "11px" }}>
                {" "}
                {this.state.glassesCurrent.name}
              </span>
            </h3>
            <p>
              Mô tả:{" "}
              <span style={{ fontSize: "11px" }}>
                {this.state.glassesCurrent.desc.length > 20 ? (
                  <span>
                    {this.state.glassesCurrent.desc.substring(0, 20)}...
                  </span>
                ) : (
                  <span>{this.state.glassesCurrent.desc}</span>
                )}
              </span>
            </p>
          </div>
        </div>
        <div
          className="bg-secondary"
          style={{
            position: "absolute",
            top: "20%",
            left: "100px",
            // width: "100%",
          }}
        >
          <div className="glassThuKinh d-flex container justify-content-center p-5  ">
            {this.renderHinhanh()}
          </div>
        </div>
      </div>
    );
  }
}
