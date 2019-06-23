import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Journals extends Component {
  render() {
    return (
      <div className="journals__one">
        <Link
          to={`/journals/${this.props.id}`}
          className="journals__one--anchor"
        >
          <div className="journals__one--anchor--car">
            <h5>{this.props.sub}</h5>
            <h4>{this.props.title}</h4>
          </div>
          <div className="journals__one--anchor--img">
            <div className="journals__one--anchor--img--file">
              <img src={this.props.image} alt="one" />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
