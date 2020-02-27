import React from "react";
import Img from "gatsby-image";

function ImgWrapper({ image, ...props }) {
  const component = image.childImageSharp ? (
    <Img {...props} fluid={image.childImageSharp.fluid} />
  ) : (
    <img {...props} src={image} />
  );
  return component;
}

export default ImgWrapper;
