import React from "react";
import { Query } from "react-apollo";
import Masonry from "react-masonry-component";
import { ALL_PINS } from "../Queries/PinQueries";
import Likes from "./Likes";

const AllPinsList = () => (
  <Query query={ALL_PINS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error : </p>;
      console.log(data);
      const childElements = data.allPins.map(data => (
        <div className="masonry-item" key={data._id}>
          <img className="masonry-image" alt={data.text} src={data.image} />
          <p className="masonry-text">{data.text}</p>
          <a href="#" className="masonry-user">
            {data.user}
          </a>
          <Likes
            pinId={data._id}
            likeCount={data.likeCount}
            likes={data.likes}
          />
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

export default AllPinsList;
