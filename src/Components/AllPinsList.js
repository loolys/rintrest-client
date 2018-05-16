import React, { Component } from "react";
import { Query } from "react-apollo";
import Masonry from "react-masonry-component";
import { ALL_PINS } from "../Queries/PinQueries";

const AllPinsList = () => (
  <Query query={ALL_PINS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error : </p>;

      console.log(data.allPins);

      const childElements = data.allPins.map(data => (
        <div className="masonry-item">
          <img className="masonry-image" src={data.image} />
          <p className="masonry-text">{data.text}</p>
          <a href="#" className="masonry-user">
            {data.user}
          </a>
          <i className="fas fa-heart masonry-heart" />{" "}
          <span className="masonry-likes">0</span>
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
      );
    }}
  </Query>
);

// const childElements = FakeData.map(data => (
// <div className="masonry-item">
//   <img className="masonry-image" src={data.image} />
//   <p className="masonry-text">{data.text}</p>
//   <a href="#" className="masonry-user">
//     {data.user}
//   </a>
//   <i className="fas fa-heart masonry-heart" />{" "}
//   <span className="masonry-likes">{data.likes}</span>
// </div>
// ));

export default AllPinsList;
