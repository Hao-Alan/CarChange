import React, { Component } from "react";
// import "./baiTapMangMau.css";
import style from "./mauBottom.module.css";

export default class MauBottom extends Component {
  render() {
    return (
      <div className={style.lonBe}>
        <div class="container color-blue lonTo">
          <div class="row justify-content-md-center">
            <div class="col col-lg-2">1 of 3</div>
            <div class="col-md-auto">Variable width content</div>
            <div class="col col-lg-2">3 of 3</div>
          </div>
          <div class="row">
            <div class="col">1 of 3</div>
            <div class="col-md-auto">Variable width content</div>
            <div class="col col-lg-2">3 of 3</div>
          </div>
        </div>
      </div>
    );
  }
}
