import CMS from "netlify-cms-app";
// import uploadcare from "netlify-cms-media-library-uploadcare";
// import cloudinary from "netlify-cms-media-library-cloudinary";

import ServicesPagePreview from "./preview-templates/ServicesPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("services", ServicesPagePreview);
