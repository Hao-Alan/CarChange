import React, { Component } from "react";

export default class BaiTapTable extends Component {
  productList = [
    {
      id: 1,
      name: "black car",
      price: 1000,
      img: "./picture/products/black-car.jpg",
    },
    {
      id: 2,
      name: "red car",
      price: 2000,
      img: "./picture/products/red-car.jpg",
    },
    {
      id: 3,
      name: "silver car",
      price: 3000,
      img: "./picture/products/silver-car.jpg",
    },
    {
      id: 4,
      name: "steel car",
      price: 4000,
      img: "./picture/products/steel-car.jpg",
    },
  ];
  hamRender = () => {
    let renderList = [];
    for (let index = 0; index < this.productList.length; index++) {
      let product = this.productList[index];
      let HTML = (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} style={{ width: "100px" }} />
          </td>
          <td></td>
        </tr>
      );
      renderList.push(HTML);
      //   console.log(HTML);
    }
    return renderList;
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>img</th>
          </tr>
        </thead>
        <tbody>{this.hamRender()}</tbody>
      </table>
    );
  }
}
