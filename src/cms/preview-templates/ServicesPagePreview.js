import React from "react";
import PropTypes from "prop-types";
import { ServicesPageTemplate } from "../../templates/services-page";

const ServicesPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <ServicesPageTemplate
        title={entry.getIn(["data", "title"])}
        serviceTiles={data.serviceTiles || {}}
        image={getAsset(data.image)}
      />
    );
  }
};

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func
};

export default ServicesPagePreview;
