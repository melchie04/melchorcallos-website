import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageControl } from "../../providers/PageControlProvider";
import { avatar } from "../../assets/contents/images";

const Avatar = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const { setActivePage } = usePageControl();

  return (
    <div
      className={`flex flex-1 justify-center items-center transition-opacity duration-500 ${
        isImageLoading ? "opacity-0" : "opacity-100"
      }`}
    >
      <Link
        className="size-48 relative rounded-full overflow-hidden bg-dark dark:bg-light after:bg-light after:dark:bg-dark
        before:bg-gradient-to-t before:dark:from-primary-light before:from-primary-dark before:dark:to-secondary-light before:to-secondary-dark circular-spin-animation"
        to="/contact"
        onClick={() => setActivePage("/contact")}
      >
        <div className="flex flex-col justify-center items-center absolute inset-[12px] z-10 rounded-full overflow-hidden cursor-pointer">
          <img
            className="size-full absolute top-0 left-0 object-cover select-none bg-dark dark:bg-light transition-opacity duration-500 hover:opacity-0"
            src={avatar}
            alt="avatar"
            draggable="false"
            onLoad={() => setIsImageLoading(false)}
          />
          <p className="size-full flex justify-center items-center bg-dark dark:bg-light text-primary-dark dark:text-primary-light text-center text-xl font-bold select-none">
            SAY HELLO!
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Avatar;
