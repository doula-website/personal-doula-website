import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  content,
  contentComponent

  // intro
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div aria-hidden="true">
      <div
        className="full-width-image margin-top-0 is-relative"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`
        }}
      >
        <div className="hover-over-darken absolute"></div>
        <div className="section" style={{ zIndex: "1" }}>
          {/* <h2 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
          {title}
        </h2> */}
          <h2
            className="hero-text is-uppercase has-text-weight-bold is-size-1-tablet is-size-2-mobile"
            // style={{ fontSize:  }}
          >
            {title}
          </h2>
          <h1 className="hero-text is-size-2-tablet is-size-3-mobile">
            {subheading}
          </h1>
        </div>
      </div>

      <section class="section medium-container">
        <div className="container centered" style={{ flexDirection: "column" }}>
          <div
            className="column
          centered"
            style={{ flexDirection: "column" }}
          >
            <h1 className="title margin-bottom" style={{ color: "#008080" }}>
              {mainpitch.title}
            </h1>
            <p className="">{mainpitch.description}</p>{" "}
          </div>{" "}
        </div>
      </section>

      {/* about section */}
      <div className="section has-background-teal">
        <div className="container medium-container">
          <div className="columns">
            <div
              className="column is-half border-light centered
            "
              style={{ flexDirection: "column" }}
            >
              <h1
                className="title margin-bottom"
                style={{ color: "#f9f6f6" }}
                aria-label="about me"
              >
                {mainpitch.title2}
              </h1>
              <PageContent className="content" content={content} />
            </div>
            <div className="colum is-half centered">
              <img
                src={
                  mainpitch.image.childImageSharp
                    ? mainpitch.image.childImageSharp.fluid.src
                    : mainpitch.image
                }
                alt="portrait photograph"
                className="square-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  // heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func
  // description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array
  // })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        mainpitch {
          title
          description
          title2
          image {
            childImageSharp {
              fluid(maxWidth: 350, maxHeight: 350, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
