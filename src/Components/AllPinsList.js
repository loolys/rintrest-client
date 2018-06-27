import React from "react";
import { Query } from "react-apollo";
import Masonry from "react-masonry-component";
import { Link } from "react-router-dom";
import { ALL_PINS } from "../Queries/PinQueries";
import Likes from "./Likes";

const AllPinsList = () => (
  <Query query={ALL_PINS} pollInterval={200}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error : </p>;

      let childElements = data.allPins.map(data => (
        <div className="masonry-item" key={data._id}>
          <img className="masonry-image" alt={data.text} src={data.image} />
          <p className="masonry-text">{data.text}</p>
          <Link to={`/profile/${data.user}`} className="masonry-user">
            {data.user}
          </Link>
          <Likes
            pinId={data._id}
            likeCount={data.likeCount}
            likes={data.likes}
          />
        </div>
      ));
      childElements = childElements.reverse();
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
