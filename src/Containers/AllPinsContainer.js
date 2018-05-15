import React, { Component } from "react";
import Masonry from "react-masonry-component";

import AllPinsList from "../Components/AllPinsList";
import FakeData from "../FakeData/AllPins";

class AllPinsContainer extends Component {
  componentDidMount = () => {
    console.log(FakeData);
  };

  render() {
    const childElements = FakeData.map(data => (
      <div className="masonry-item">
        <img className="masonry-image" src={data.image} />
        <p>{data.text}</p>
      </div>
    ));

    const options = {
      gutter: 8,
      position: null
    };

    return (
      <Masonry className="masonry" options={options}>
        {childElements}
      </Masonry>
      // <div className="masonry">
      //   {FakeData.map(data => (
      //     <div className="masonry__panel">
      //       <div className="masonry__panel-content">
      //         <img src={data.image} alt={data.text} />
      //         <p>{data.text}</p>
      //       </div>
      //     </div>
      //   ))}
      // </div>
    );
  }
}

export default AllPinsContainer;
