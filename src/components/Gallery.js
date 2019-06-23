import React, { Component } from "react";
import Likes from "../assets/icon/SVG/heart.png";
import PopupCtrl from "../container/PopupCtrl";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="masonry">
        <div className="masonry__profile">
          <img id="profile" src={this.props.profile} alt="profile" />
          <h4>{this.props.username}</h4>
        </div>
        <div className="masonry__image">
          <div className="masonry__image--imageLink">
            <img
              id="image"
              src={this.props.image}
              alt="thumbnail"
              onClick={this.toggleModal}
            />
            <PopupCtrl
              id={this.props.id}
              username={this.props.username}
              image={this.props.image}
              profile={this.props.profile}
              title={this.props.title}
              likes={this.props.likes}
              show={this.state.isOpen}
              onClose={this.toggleModal}
              forceRendering={this.props.forceRendering}
              likePhoto={this.props.likePhoto}
              savePhoto={this.props.savePhoto}
              tags={this.props.tags}
            />
          </div>
          <div className="masonry__image--likes">
            <img id="likes" src={Likes} alt="likes" />
            <h4 className="num">{this.props.likes}</h4>
          </div>
          <div className="masonry__image--profile">
            <img id="profile" src={this.props.profile} alt="profile" />
            <h4>{this.props.username}</h4>
          </div>
        </div>
      </div>
    );
  }
}
