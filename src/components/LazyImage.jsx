import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ src, alt, className }) => {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <LazyLoadImage
      effect="blur"
      wrapperProps={{
        style: { transitionDelay: "1s" },
      }}
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${imgLoading ? 'opacity-0' : 'opacity-100'}`}
      onLoad={() => setImgLoading(false)}
    />
  );
};

export default LazyImage;
