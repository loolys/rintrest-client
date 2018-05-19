import React from "react";
import { Query } from "react-apollo";
import Masonry from "react-masonry-component";
import { USERS_PINS } from "../Queries/PinQueries";

export default ({ token }) => {
  return (
    <Query query={USERS_PINS} variables={{ header: token || "" }}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return "error";
        console.log(data);
        const childElements = data.usersPins.map(data => (
          <div className="masonry-item" key={data._id}>
            <img className="masonry-image" alt={data.text} src={data.image} />
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
};
