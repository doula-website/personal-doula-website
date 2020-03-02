import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import leaves from "../icons/leaves.svg";
// import fullWidthServicesImg from "../../static/img/gabriela-tamara-cycman-I-EiXkwo1fU-unsplash.jpg";

// import Content, { HTMLContent } from "../components/Content";

export const ServicesPageTemplate = ({ title, serviceTiles, image }) => {
  // const PageContent = contentComponent || Content;
  console.warn(serviceTiles);
  return (
    <div>
      <div className="page-top-padding"></div>
      <section className="section section--gradient">
        <div className="container">
          {/* services column  */}{" "}
          <div
            className="centered margin-bottom"
            style={{ flexDirection: "column" }}
          >
            <h2 className="title is-size-1-tablet is-size-2-mobile is-bold-light is-uppercase is-relative">
              {title}
            </h2>{" "}
          </div>{" "}
          <div className="columns">
            <div className="column is-one-third">
              <div className="section">
                <h1 className="margin-bottom is-size-3-tablet is-size-4-mobile">
                  {serviceTiles.title}
                </h1>
                <img
                  src={
                    serviceTiles.image.childImageSharp
                      ? serviceTiles.image.childImageSharp.fluid.src
                      : serviceTiles.image
                  }
                  className="is-square margin-bottom"
                  alt="pre natal doula"
                />
                <p className="notifiction">{serviceTiles.description}</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="section">
                <h1 className="margin-bottom is-size-3-tablet is-size-4-mobile">
                  {serviceTiles.title2}
                </h1>
                <img
                  src={
                    serviceTiles.image2.childImageSharp
                      ? serviceTiles.image2.childImageSharp.fluid.src
                      : serviceTiles.image2
                  }
                  className="is-square margin-bottom"
                  alt="birth doula"
                />
                <p className="notifiction">{serviceTiles.description2}</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="section">
                <h1 className="margin-bottom  is-size-3-tablet is-size-4-mobile">
                  {serviceTiles.title3}
                </h1>
                <img
                  src={
                    serviceTiles.image3.childImageSharp
                      ? serviceTiles.image3.childImageSharp.fluid.src
                      : serviceTiles.image3
                  }
                  className="is-square margin-bottom"
                  alt="post birth doula"
                />
                <p className="notifiction">{serviceTiles.description3}</p>
              </div>
            </div>
          </div>
          {/* <h2 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
          {title}
        </h2> */}
        </div>
      </section>

      {/* bottom full screen image */}
      <div className="is-relative">
        <img
          className="full-width-image"
          src={image.childImageSharp ? image.childImageSharp.fluid.src : image}
          style={{ backgroundPosition: "center" }}
          alt="full width image"
        />
        <div className="hover-over-darken absolute"></div>
        <section class="section large-container absolute centered">
          <div
            className="container centered"
            style={{ flexDirection: "column" }}
          >
            <div
              className="column
          centered"
              style={{
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              {" "}
              <h3 className="is-sand feature-text margin-bottom is-hidden-mobile">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h3>{" "}
              <button href="/contact" class="is-medium hover-button">
                Get in Touch
              </button>
            </div>{" "}
          </div>
        </section>
      </div>
    </div>
  );
};

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  serviceTiles: PropTypes.object,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ServicesPageTemplate {...frontmatter} />
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ServicesPage;

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        serviceTiles {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
          title2
          image2 {
            childImageSharp {
              fluid(maxWidth: 400, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description2
          title3
          image3 {
            childImageSharp {
              fluid(maxWidth: 400, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description3
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
