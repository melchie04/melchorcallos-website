import { useTypewriter, Cursor } from "react-simple-typewriter";
import { home } from "../../assets/contents/contents";

const Greetings = () => {
  const { introduction, nickname, typewriter } = home;
  const [text] = useTypewriter(typewriter);

  return (
    <div className="flex flex-col justify-center md:items-start items-center md:mx-5 md:my-0 mx-0 my-5">
      <h1 className="lg:text-7xl sm:text-6xl text-5xl font-bold select-none m-1">
        <span className="text-dark dark:text-light">{introduction}</span>
        <span className="text-primary-light dark:text-primary-dark">{nickname}</span>
      </h1>
      <p className="lg:text-3xl sm:text-2xl text-xl text-secondary-light dark:text-secondary-dark font-medium italic select-none m-1">
        {text}
        <Cursor />
      </p>
    </div>
  );
};

export default Greetings;