import React, { Component } from "react";
import dataFilms from "../data/DataFilms.json";

export default class BaiTapAvenger extends Component {
  renderPage = () => {
    return dataFilms.map((film, index) => {
      return (
        <div className="col-3 m-3 " key={index}>
          <div
            className="card p-2 "
            style={{
              width: "200px",
              height: "450px",
              overflow: "hidden",
              backgroundColor: "grey",
            }}
          >
            <img
              src={film.hinhAnh}
              className="card-img-top"
              alt="..."
              style={{ height: "250px", width: "180px" }}
            />
            <div className="card-body" style={{ width: "200px" }}>
              <h5 className="card-title">{film.tenPhim}</h5>
              <p className="card-text">
                {film.moTa.length > 80 ? (
                  <p>{film.moTa.substring(0, 80)} ...</p>
                ) : (
                  <p>{film.moTa}</p>
                )}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./picture/avanger.jpg)",
          minHeight: "2000px",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0, 0.5)", minHeight: "2000px" }}
        >
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "rgba(87,83,149, 0.7)" }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                CyberLearn Movie
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div>
            <div className="container">
              <div className="row">{this.renderPage()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
