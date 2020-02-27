import React from "react";
import PropTypes from "prop-types";
import { ResourcesPageTemplate } from "../../templates/resources-page";

const ResourcesPagePreview = ({ entry, widgetFor }) => (
  <ResourcesPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

ResourcesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ResourcesPagePreview;
