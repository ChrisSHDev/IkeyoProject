import React, { Component } from "react";
import Slide from "../components/Slide";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      translateValue: 0
    };
  }
  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };
  componentDidMount() {
    setTimeout(this.goToNextSlide, 3000);
  }
  goToNextSlide = () => {
    if (this.state.currentIndex === this.props.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
    setTimeout(this.goToNextSlide, 3000);
  };
  slideWidth = () => {
    return document.querySelector(".slider__wrapper--slide").clientWidth;
  };
  render() {
    return (
      <div className="slider">
        <h3>10 Most Loved Decorating Concepts</h3>
        <div
          className="slider__wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.props.images.map((image, i) => (
            <Slide key={i} image={image.image} />
          ))}
        </div>
      </div>
    );
  }
}
