import React from "react";
import { Mutation } from "react-apollo";
import decode from "jwt-decode";

import { LIKE_PIN } from "../Queries/PinQueries";

class Likes extends React.Component {
  state = {
    token: "",
    user: "",
    likeCount: 0,
    likes: [],
    userLiked: false
  };

  componentDidMount = () => {
    try {
      const { username } = decode(localStorage.getItem("token"));
      this.setState({
        user: username,
        userLiked: this.props.likes.indexOf(username) !== -1 ? true : false
      });
    } catch (e) {}
    this.setState({
      token: localStorage.getItem("token") || "",
      likeCount: this.props.likeCount,
      likes: this.props.likes
    });
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
              style={{ color: this.state.userLiked ? "red" : "grey" }}
              onClick={async () => {
                if (this.state.user) {
                  const result = await likePin({
                    variables: {
                      username: this.state.user,
                      id: this.props.pinId
                    }
                  });
                  this.setState({
                    likeCount: result.data.likePin.likeCount,
                    likes: result.data.likePin.likes,
                    userLiked:
                      result.data.likePin.likes.indexOf(this.state.user) !== -1
                        ? true
                        : false
                  });
                }
              }}
            />{" "}
            <span className="masonry-likes">{this.state.likeCount}</span>
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default Likes;
