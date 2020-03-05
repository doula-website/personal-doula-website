import React, { useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import Image from "gatsby-image";
import Heart from "../icons/social/heart.svg";
import Comments from "../icons/social/speech-bubble.svg";

const Instagram = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allInstaNode {
            edges {
              node {
                id
                likes
                comments
                mediaType
                preview
                original
                timestamp
                caption
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 350, maxHeight: 350, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                dimensions {
                  height
                  width
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div
            className="instagram-grid is-relative"
            style={{
              marginBottom: "1rem"
            }}
          >
            {data.allInstaNode.edges.slice(0, 4).map((item, i) => {
              console.warn(item.node);
              return item.node.localFile ? (
                <a
                  href={`https://www.instagram.com/p/${item.node.id}`}
                  target="_blank"
                  rel="noopener"
                  tabIndex="0"
                  className="is-relative"
                >
                  <div key={i} className="is-relative insta-post-preview">
                    <Image
                      className="insta-image-container"
                      fluid={item.node.localFile.childImageSharp.fluid}
                    />

                    <div className="is-overlay instagram-preview-overlay-top">
                      <div className="black-hover-background"></div>
                      <span className="small-margin likes">
                        {item.node.likes}
                      </span>
                      <img
                        src={Heart}
                        className="small-margin"
                        style={{ width: "1em", height: "1em" }}
                      />
                      <span className="small-margin likes">
                        {item.node.comments}
                      </span>
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
      }}
    />
  );
};

export default Instagram;
