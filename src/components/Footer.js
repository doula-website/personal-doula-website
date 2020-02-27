import React from "react";
import { Link } from "gatsby";

import logoInvert from "../icons/doula-logo-invert.svg";
import logo from "../icons/doula-logo.svg";
import facebook from "../icons/social/facebook.svg";
import instagram from "../icons/social/instagram.svg";
import email from "../icons/email-darkRed.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter" aria-label="footer">
        <div className="content has-text-centered is-grey has-text-white-ter">
          <div className="container is-grey  has-text-white-ter">
            <div className="columns" style={{ padding: "2rem" }}>
              <div className="column is-one-third is-flex">
                <section className="menu" role="website navigation">
                  <ul className="menu-list">
                    <li>
                      <Link aria-label="home" to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        aria-label="services"
                        className="navbar-item"
                        to="/services"
                      >
                        Services
                      </Link>
                    </li>

                    <li></li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
                <div className="column is-one-third">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link
                          aria-label="resources"
                          className="navbar-item"
                          to="/resources"
                        >
                          Resources
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="navbar-item"
                          to="/contact"
                          aria-label="contact"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>{" "}
              </div>
              {/* <div className=" has-background-teal  has-text-centered"> */}
              <div className="column is-one-third centered">
                <img
                  src={logo}
                  alt="Chantal Baptiste Doula"
                  style={{ width: "14em", height: "10em" }}
                />
              </div>
              {/* </div> */}
              <div className="column is-one-third social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>

                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="mailto:chantalbaptistedoula@gmail.com">
                  <img
                    src={email}
                    alt="email"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
      </footer>
    );
  }
};

export default Footer;
