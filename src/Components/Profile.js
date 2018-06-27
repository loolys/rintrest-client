import React from "react";
import { Query } from "react-apollo";
import Masonry from "react-masonry-component";
import { Link } from "react-router-dom";
import { USERS_PINS } from "../Queries/PinQueries";
import Likes from "./Likes";

export default ({ profile }) => {
  return (
    <Query
      query={USERS_PINS}
      variables={{ header: profile || "" }}
      pollInterval={200}
    >
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return "error";
        let childElements = data.usersPins.map(data => (
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
};
