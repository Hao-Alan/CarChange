import React, { Component } from "react";

export default class BaiTapTable222 extends Component {
  productList = [
    {
      id: 1,
      name: "black",
      price: 2000,
      img: "./picture/products/black-car.jpg",
    },
    {
      id: 1,
      name: "red",
      price: 8000,
      img: "./picture/products/red-car.jpg",
    },
    {
      id: 3,
      name: "black",
      price: 66000,
      img: "./picture/products/silver-car.jpg",
    },
    {
      id: 4,
      name: "steel",
      price: 5000,
      img: "./picture/products/steel-car.jpg",
    },
  ];

  //   hamrender = () => {
  //     let newProductList = [];
  //     for (let index = 0; index < this.productList.length; index++) {
  //       let element = this.productList[index];
  //       let string = (
  //         <tr key={index}>
  //           <td>{element.id}</td>
  //           <td>{element.name}</td>
  //           <td>{element.price}</td>
  //           <td>
  //             <img src={element.img} style={{ width: "150px" }} />
  //           </td>
  //         </tr>
  //       );
  //       newProductList.push(string);
  //     }
  //     return newProductList;
  //   };
  hamrender = () => {
    return this.productList.map((value, index) => {
      let mangMoi = (
        <tr key={index}>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>{value.price}</td>
          <td>
            <img src={value.img} style={{ width: "200px" }} alt="index" />
          </td>
        </tr>
      );
      return mangMoi;
    });
    // return newProductList;
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>hinh anh</th>
            </tr>
          </thead>
          <tbody>{this.hamrender()}</tbody>
        </table>
      </div>
    );
  }
}
