import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";

export const ServicesPageTemplate = ({ title, serviceTiles, image }) => {
  return (
    <div>
      <div className="page-top-padding"></div>
      <section className="section section--gradient has-background-sand">
        <div className="container">
          <div
            className="centered "
            style={{ flexDirection: "column", marginBottom: "3.66rem" }}
          >
            <h2 className="title is-size-1-tablet is-size-2-mobile is-bold-light is-uppercase is-relative">
              {title}
            </h2>{" "}
          </div>{" "}
          <div className="columns">
            <div className="column is is-one-third-desktop is-half-tablet ">
              <div className=" box-shadow-dark has-background-light-teal  max-width-400  margin-auto ">
                <h1 className=" is-size-3-tablet is-size-4-mobile padding-small ">
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
                <p className="notifiction padding-small ">
                  {serviceTiles.description}
                </p>
              </div>
            </div>
            <div className="column is-one-third-desktop is-half-tablet ">
              <div className="box-shadow-dark has-background-light-teal  max-width-400  margin-auto">
                <h1 className="padding-small is-size-3-tablet is-size-4-mobile">
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
                <p className="notifiction padding-small ">
                  {serviceTiles.description2}
                </p>
              </div>
            </div>
            <div className="column is-one-third-desktop is-half-tablet">
              <div className=" box-shadow-dark  has-background-light-teal max-width-400  margin-auto">
                <h1 className=" padding-small is-size-3-tablet is-size-4-mobile ">
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
                <p className="notifiction padding-small ">
                  {serviceTiles.description3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="is-relative">
        <img
          className="full-width-image"
          style={{
            backgroundImage: `url(${
              image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          }}
        />
        <div className="hover-over-darken absolute"></div>
        <section className="section large-container absolute centered">
          <div
            className="container centered"
            style={{ flexDirection: "column" }}
          >
            <div
              className="column
          centered"
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <h3 className="is-sand feature-text margin-bottom ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h3>{" "}
              <a href="/contact" type="button" class="is-medium hover-button">
                Get in Touch
              </a>
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SEO title="Doula Services Bristol" description="What I do" />

      <ServicesPageTemplate {...frontmatter} />
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
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
