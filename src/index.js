import React from "react";
import ReactDom from "react-dom";
import "../src/styles.css";
const img = "https://picsum.photos/id/1/200/300";
ReactDom.render(
  <div>
    <h1 className="heading">My favourite Foods</h1>
    <div>
      <img
        className="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZFerouxul8Ks_4q9Zu9LR-JtbN0dxrdhEA&usqp=CAU"
      />
      <img
        className="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_drFS1HPLmTdGOYyHCgtBmo71NZ8y_8xiw&usqp=CAU"
      />
      <img
        className="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-aF3zo5c4j-o6l2NIA-1PUqE-f6ar568EuQ&usqp=CAU"
      />
      <img src={img} />
    </div>
  </div>,
  document.getElementById("root")
);
