import React, { Component } from "react";
import Gallery from "../components/Gallery";
import axios from "axios";

const photoUrl = `https://radiant-escarpment-93698.herokuapp.com/photos`;

export default class Saved extends Component {
  state = {
    photos: [],
    filtered: []
  };

  componentDidMount() {
    axios.get(photoUrl).then(photo => {
      const newPhotos = photo.data.filter(photoList => {
        if (photoList.tags === 1) {
          return {
            id: photoList.id,
            title: photoList.title,
            likes: photoList.likes,
            image: photoList.thumb,
            profile: photoList.profile,
            username: photoList.username,
            tags: photoList.tags
          };
        }
      });
      this.setState({
        photos: newPhotos,
        filtered: newPhotos
      });
    });
  }

  forceRendering = () => {
    console.log("rerender in Saved");
    window.location.reload();
    this.forceUpdate();
  };

  likePhoto = photoId => {
    axios.put(`${photoUrl}/likes/${photoId}`).then(response => {
      this.setState({
        filtered: this.state.photos.map(photo =>
          photo.id === photoId ? { ...photo, likes: photo.likes + 1 } : photo
        )
      });
    });
  };

  savePhoto = (photoId, phtoTags) => {
    console.log("saved");
    console.log(photoId);
    console.log(phtoTags);
    if (phtoTags === 0) {
      axios.put(`${photoUrl}/save/${photoId}`).then(response => {
        this.setState({
          filtered: this.state.photos.map(photo =>
            photo.id === photoId ? { ...photo, tags: 1 } : photo
          )
        });
      });
    } else {
      axios.put(`${photoUrl}/save/${photoId}`).then(response => {
        this.setState({
          filtered: this.state.photos.map(photo =>
            photo.id === photoId ? { ...photo, tags: 0 } : photo
          )
        });
      });
    }
  };

  render() {
    console.log(this.state.filtered[0]);
    return (
      <div className="masonry-wrapper">
        {this.state.filtered.map(photo => (
          <Gallery
            profile={photo.profile}
            title={photo.title}
            image={photo.thumb}
            id={photo.id}
            username={photo.username}
            likes={photo.likes}
            likePhoto={this.likePhoto}
            savePhoto={this.savePhoto}
            forceRendering={this.forceRendering}
            tags={photo.tags}
          />
        ))}
      </div>
    );
  }
}
