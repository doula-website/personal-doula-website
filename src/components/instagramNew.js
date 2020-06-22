import React, { useState, useEffect } from "react";
import Heart from "../icons/social/heart.svg";
import Comments from "../icons/social/speech-bubble.svg";
import axios from "axios";

const instagramRegExp = new RegExp(
  /<script type="text\/javascript">window\._sharedData = (.*);<\/script>/
);

const fetchInstagramPhotos = async (accountUrl) => {
  const response = await axios.get(accountUrl);
  const json = JSON.parse(response.data.match(instagramRegExp)[1]);
  const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
    0,
    8
  );
  const photos = edges.map(({ node }) => {
    return {
      url: `https://www.instagram.com/p/${node.shortcode}/`,
      thumbnailUrl: node.thumbnail_src,
      displayUrl: node.display_url,
      caption: node.edge_media_to_caption.edges[0].node.text,
    };
  });
  return photos;
};

const Instagram = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const photos = await fetchInstagramPhotos(
          "https://www.instagram.com/iamchantalbaptiste/"
        );
        setPhotos(photos);
      } catch (e) {
        console.error("Fetching Instagram photos failed", e);
      }
    })();
  });

  return (
    <div
      className="instagram-grid is-relative"
      style={{
        marginBottom: "1rem",
      }}
    >
      {photos.slice(0, 4).map((item) => {
        console.warn("ITEM:", item);
        return item ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex="0"
            className="is-relative"
          >
            <div className="is-relative insta-post-preview">
              <img className="insta-image-container" src={item.thumbnailUrl} />

              <div className="is-overlay instagram-preview-overlay-top">
                <div className="black-hover-background"></div>
                {/* <span className="small-margin likes">{item.node.likes}</span> */}
                <img
                  src={Heart}
                  className="small-margin"
                  style={{ width: "1em", height: "1em" }}
                />
                <span className="small-margin likes">{item.caption}</span>
                <img
                  src={Comments}
                  className="small-margin"
                  style={{ width: "1em", height: "1em" }}
                />
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
