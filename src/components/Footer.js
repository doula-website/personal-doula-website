import React from "react";
import { Link } from "gatsby";

import logoInvert from "../icons/doula-logo-inverted.svg";
import facebook from "../icons/social/facebook.svg";
import instagram from "../icons/social/instagram.svg";
import email from "../icons/email-darkRed.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter" aria-label="footer">
        <div className="has-text-centered is-grey has-text-white-ter">
          <div className="container is-grey  has-text-white-ter">
            <div className="columns" style={{ padding: "2rem" }}>
              <div className="column is-one-fifth is-flex">
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
                </section>{" "}
              </div>
              <div className="column is-one-fifth">
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
              {/* <div className=" has-background-teal  has-text-centered"> */}
              <div className="column is-one-quarter centered">
                {/* <img
                  src={logoInvert}
                  alt="Chantal Baptiste Doula"
                  style={{ width: "14em", height: "10em" }}
                /> */}
              </div>
              {/* </div> */}
              <div className="column is-one-quarter social">
                <a
                  title="facebook"
                  href="https://www.facebook.com/chantalbaptistedoula"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  title="instagram"
                  href="https://www.instagram.com/iamchantalbaptiste/"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="email" href="mailto:chantalbaptistedoula@gmail.com">
                  <img
                    src={email}
                    alt="email"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>{" "}
                <div className="section">
                  <p>© 2020 Izabelle Wilding</p>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>
      </footer>
    );
  }
};

export default Footer;
