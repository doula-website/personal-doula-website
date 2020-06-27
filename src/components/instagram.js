import React, { useState, useEffect } from "react";
import Heart from "../icons/social/heart.svg";
import Comments from "../icons/social/speech-bubble.svg";

const Instagram = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`/.netlify/functions/instagram`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div
      className="instagram-grid is-relative"
      style={{
        marginBottom: "1rem",
      }}
    >
      {posts.map((item) => {
        return item ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex="0"
            className="is-relative"
          >
            <div className="is-relative insta-post-preview">
              <img className="insta-image-container" src={item.thumbnail} />

              <div className="is-overlay instagram-preview-overlay-top">
                <div className="black-hover-background"></div>
                <span className="small-margin likes">{item.likes}</span>
                <img
                  src={Heart}
                  className="small-margin"
                  style={{ width: "1em", height: "1em" }}
                />
                <span className="small-margin likes">{item.caption}</span>
              </div>
            </div>{" "}
          </a>
        ) : (
          <div></div>
        );
      })}
    </div>
  );
};

export default Instagram;
