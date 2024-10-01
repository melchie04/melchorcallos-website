import { useState } from "react";

const ImageLoader = ({ src, alt, className }) => {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${
        imgLoading ? "opacity-0" : "opacity-100"
      }`}
      onLoad={() => setImgLoading(false)}
    />
  );
};

export default ImageLoader;
