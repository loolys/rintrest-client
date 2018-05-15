import React, { Component } from "react";
import FakeData from "../FakeData/AllPins";

export default class AllPinsList extends Component {
  render() {
    const List = FakeData.map(data => (
      <div className="pin-item">
        <img src={data.image} alt={data.text} />
        <p>{data.text}</p>
      </div>
    ));
    return { List };
  }
}
