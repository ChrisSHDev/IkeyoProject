import React, { Component } from "react";
import Gallery from "../components/Gallery";
import axios from "axios";

const photoUrl = `https://radiant-escarpment-93698.herokuapp.com/photos`;

export default class GalleryCtrl extends Component {
  state = {
    photos: [],
    filtered: []
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(photoUrl).then(photo => {
      const newPhotos = photo.data.map(photoList => {
        return {
          id: photoList.id,
          title: photoList.title,
          likes: photoList.likes,
          image: photoList.thumb,
          profile: photoList.profile,
          username: photoList.username,
          tags: photoList.tags,
          style: photoList.style
        };
      });

      console.log(newPhotos);
      this.setState({
        photos: newPhotos,
        filtered: newPhotos
      });
    });
    console.log(this.state.photos);
  }

  likePhoto = photoId => {
    axios.put(`${photoUrl}/likes/${photoId}`).then(response => {
      this.setState({
        filtered: this.state.filtered.map(photo =>
          photo.id === photoId ? { ...photo, likes: photo.likes + 1 } : photo
        )
      });
    });
  };

  savePhoto = (photoId, phtoTags) => {
    console.log("Tag is: ", phtoTags);
    if (phtoTags === 0) {
      axios.put(`${photoUrl}/save/${photoId}`).then(response => {
        this.setState({
          filtered: this.state.filtered.map(photo =>
            photo.id === photoId ? { ...photo, tags: 1 } : photo
          )
        });
      });
    } else {
      axios.put(`${photoUrl}/save/${photoId}`).then(response => {
        this.setState({
          filtered: this.state.filtered.map(photo =>
            photo.id === photoId ? { ...photo, tags: 0 } : photo
          )
        });
      });
    }
  };

  forceRendering = () => {
    console.log("rerender in Gallery Ctrl");
  };

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.state.photos;
      console.log(this.state.photos);
      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(filteredItem => {
        console.log(filteredItem.style);
        // change current item to lowercase
        const style = filteredItem.style.toLowerCase();
        const title = filteredItem.title.toLowerCase();
        const username = filteredItem.username.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        console.log(style.includes(filter));

        if (style.includes(filter)) {
          console.log("working");
          return style.includes(filter);
        } else if (title.includes(filter)) {
          return title.includes(filter);
        } else if (username.includes(filter)) {
          return username.includes(filter);
        }

        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.state.photos;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  render() {
    console.log(this.state.photos);
    console.log(this.state.photos[0]);
    return (
      <>
        <div className="searchBar">
          <input
            className="searchBar__Bar"
            placeholder="Search"
            onChange={this.handleChange}
          />
        </div>
        <div className="masonry-wrapper">
          {this.state.filtered.map(photo => (
            <Gallery
              profile={photo.profile}
              title={photo.title}
              image={photo.image}
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
      </>
    );
  }
}
