import React, { Component } from "react";

export default class Story extends Component {
  render() {
    console.log(this.props.title);
    return (
      <div className="AllStory__one">
        <h4 className="AllStory__one--title">{this.props.title}</h4>
        <img
          className="AllStory__one--image"
          src={this.props.image}
          alt="story"
        />
        <h4 className="AllStory__one--article">{this.props.description}</h4>
      </div>
    );
  }
}
