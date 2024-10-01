const LinkButton = ({ children, href }) => {
  return (
    <>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary mx-2 hover:scale-125 duration-300"
        >
          {children}
        </a>
      )}
    </>
  );
};

export default LinkButton;
