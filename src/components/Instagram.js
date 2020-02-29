import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Image from "gatsby-image";
import Heart from "../assets/heart.svg";

const Instagram = () => (
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
      console.warn(data, "my log");
      return (
        <div
          style={{
            marginBottom: "1rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr"
          }}
        >
          {data.allInstaNode.edges.map((item, i) => {
            return item.node.localFile ? (
              <div key={i} className="is-relative insta-post-preview">
                <a
                  href={item.node.link}
                  target="_blank"
                  rel="noopener"
                  tabIndex="0"
                  className="is-relative"
                >
                  <Image
                    className="insta-image-container"
                    fluid={item.node.localFile.childImageSharp.fluid}
                  />
                </a>{" "}
                <div className="is-overlay instagram-preview-overlay-top">
                  <div className="black-hover-background"></div>
                  <span className="is-size-6 is-white">{item.node.likes}</span>
                  <Heart style={{ width: "1em", height: "1em" }} />
                </div>
              </div>
            ) : (
              <div></div>
            );
          })}
        </div>
      );
    }}
  />
);

export default Instagram;
