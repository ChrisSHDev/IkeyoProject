import React, { Component } from "react";
import axios from "axios";
import Slider from "./Slider";
import JournalsCtrl from "../container/JournalCtrl";

const photoUrl = `https://radiant-escarpment-93698.herokuapp.com/photos`;

export default class MainCtrl extends Component {

  state = {
    mains: []
  };

  componentDidMount() {
    axios.get(photoUrl).then(main => {
      const mainPhotos = main.data.map(mainList => {
        return {
          id: mainList.id,
          title: mainList.title,
          likes: mainList.likes,
          image: mainList.thumb,
          profile: mainList.profile,
          username: mainList.username
        };
      });

      const sortedMains = mainPhotos.sort(
        (a, b) => parseFloat(b.likes) - parseFloat(a.likes)
      );
      const newMains = sortedMains.slice(0, 10);

      this.setState({
        mains: newMains
      });
    });
  }

  render() {
    const {
      mains
    } = this.state;
    if (Object.keys(mains).length === 0) return <div> API is Loading... </div>
    return ( 
      <>
      <Slider images = {this.state.mains}/> 
      <JournalsCtrl/>
      </>
    );
  }
}
