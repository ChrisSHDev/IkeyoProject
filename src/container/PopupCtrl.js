import React from "react";
import Likes from "../assets/icon/SVG/heart.png";
import Save from "../assets/icon/SVG/save.png";
import Saved from "../assets/icon/SVG/saved.png";

const PopupCtrl = ({
  id,
  onClose,
  show,
  title,
  image,
  profile,
  username,
  likes,
  likePhoto,
  savePhoto,
  forceRendering,
  tags
}) => {
  let saveImg;

  if (!show) {
    return null;
  }

  if (tags === 0) {
    saveImg = Save;
  } else {
    saveImg = Saved;
  }
  return (
    <div className="modal">
      <button
        onClick={event => {
          onClose();
          forceRendering();
        }}
      >
        X
      </button>
      <section className="modal__main">
        <div className="modal__main--flex">
          <div className="modal__main--flex--profile">
            <img src={profile} id="photographer" alt="profile" />
            <h5>{username}</h5>
          </div>
          <div className="modal__main--flex--likes">
            <img
              id="heart"
              src={Likes}
              alt="likes"
              onClick={() => likePhoto(id)}
            />
            <span>{likes}</span>
            <img
              id="save"
              src={saveImg}
              alt="save"
              onClick={() => savePhoto(id, tags)}
            />
            <span>{tags}</span>
          </div>
        </div>
        <div className="modal__main--thumb">
          <img id="thumb" src={image} alt="thumb" />
          <div className="modal__main--thumb--text">
            <h2>"{title}"</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopupCtrl;
