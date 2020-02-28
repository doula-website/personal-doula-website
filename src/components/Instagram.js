import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Image from "gatsby-image";

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
            console.warn(item);
            return item.node.localFile ? (
              <div key={i}>
                <a
                  href={item.node.link}
                  target="_blank"
                  rel="noopener"
                  tabIndex="0"
                >
                  <Image fluid={item.node.localFile.childImageSharp.fluid} />
                </a>
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
