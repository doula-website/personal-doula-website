import CMS from "netlify-cms-app";
import ServicesPagePreview from "./preview-templates/ServicesPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("services", ServicesPagePreview);
