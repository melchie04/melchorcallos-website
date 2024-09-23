import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ src, alt, className }) => (
  <LazyLoadImage
    effect="blur"
    wrapperProps={{
      style: { transitionDelay: "1s" },
    }}
    src={src}
    alt={alt}
    className={className}
  />
);

export default LazyImage;
