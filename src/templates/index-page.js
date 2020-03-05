import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Instagram from "../components/Instagram";
import instagramLogo from "../icons/social/instagram.svg";

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <SEO
        title="About Chantal"
        description="About Chantal Baptiste Doula Bristol"
      />
      <div aria-hidden="true">
        <div className="page-top-padding"></div>
        <div
          className="full-width-image margin-top-0 is-relative"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`
          }}
        >
          <div className="section" style={{ zIndex: "1" }}>
            <h2 className="hero-text is-uppercase has-text-weight-bold is-size-1-mobile">
              {title}
            </h2>
            <h1 className="hero-text is-size-2-tablet is-size-3-mobile">
              {subheading}
            </h1>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="home-section section  is-inline-block medium-container ">
            <div className=" section">
              <article class="container centered dark-border">
                <div
                  className="home-column column"
                  style={{
                    flexDirection: "column",
                    padding: 50
                  }}
                >
                  <h1
                    className="title margin-bottom"
                    style={{ color: "#008080" }}
                  >
                    {mainpitch.title}
                  </h1>
                  <p className="">{mainpitch.description}</p>{" "}
                </div>
              </article>
            </div>
            <div className="home-section section">
              <div className="container is-flex">
                <div className="columns">
                  <article
                    className=" column has-background-white about-section"
                    style={{ flexDirection: "column", margin: 0, padding: 50 }}
                  >
                    <div className="columns">
                      {" "}
                      <div className="centered column is-one-third ">
                        <h1
                          className="hidden-desktop title margin-bottom is-teal has-text-left"
                          aria-label="about me"
                        >
                          {mainpitch.title2}
                        </h1>
                        <div className="portrait-photo margin-bottom">
                          <img
                            src={
                              mainpitch.image.childImageSharp
                                ? mainpitch.image.childImageSharp.fluid.src
                                : mainpitch.image
                            }
                            alt="portrait photograph"
                            className="square-img about-img"
                          />{" "}
                        </div>
                        <Link
                          to="/services"
                          className="services-tile is-relative"
                        >
                          <img
                            src={
                              mainpitch.smallImage.childImageSharp
                                ? mainpitch.smallImage.childImageSharp.fluid.src
                                : mainpitch.smallImage
                            }
                            alt="portrait photograph"
                            className="square-img is-grey about-img"
                          />{" "}
                          <p className="tile-text quicksand is-size-5-mobile">
                            What I Do
                          </p>{" "}
                        </Link>
                      </div>
                      <div className="home-column column is-two-thirds">
                        <h1
                          className="hidden-mobile title margin-bottom is-teal"
                          aria-label="about me"
                        >
                          {mainpitch.title2}
                        </h1>
                        <PageContent className="content" content={content} />{" "}
                      </div>
                    </div>
                  </article>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>
        <div className="home-section section ">
          <article className="has-background-sand container medium-container teal-border">
            <div className="colum is-relative" style={{ paddingTop: "2rem" }}>
              <a
                href="https://www.instagram.com/iamchantalbaptiste/"
                style={{ marginLeft: "3rem" }}
              >
                {" "}
                <img
                  src={instagramLogo}
                  style={{ height: "1.25rem", width: "1.25rem" }}
                />
                <span
                  className="title is-size-4-mobile"
                  style={{ paddingLeft: "1rem" }}
                >
                  {" "}
                  iamchantalbaptiste
                </span>
              </a>

              <Instagram />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func
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
      html
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
              fluid(maxWidth: 250, maxHeight: 250, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          smallImage {
            childImageSharp {
              fluid(maxWidth: 250, maxHeight: 125, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
