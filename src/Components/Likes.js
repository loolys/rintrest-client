import React from "react";
import { Mutation } from "react-apollo";
import decode from "jwt-decode";

import { LIKE_PIN } from "../Queries/PinQueries";

class Likes extends React.Component {
  state = {
    token: "",
    user: "",
    likeCount: 0
  };

  componentDidMount = () => {
    this.setState({
      token: localStorage.getItem("token") || "",
      likeCount: this.props.likeCount
    });
    try {
      const { username } = decode(localStorage.getItem("token"));
      this.setState({
        user: username
      });
    } catch (e) {}
  };

  handleLike = async likePin => {
    if (this.state.user) {
      const result = await likePin({
        variables: { username: this.state.user, id: this.props.pinId }
      });
      console.log(result);
    }
  };

  render() {
    return (
      <Mutation mutation={LIKE_PIN}>
        {(likePin, { data }) => (
          <React.Fragment>
            <i
              className="fas fa-heart masonry-heart"
              onClick={async () => {
                if (this.state.user) {
                  const result = await likePin({
                    variables: {
                      username: this.state.user,
                      id: this.props.pinId
                    }
                  });
                  console.log(result);
                }
              }}
            />{" "}
            <span className="masonry-likes">{this.props.likeCount}</span>
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default Likes;
