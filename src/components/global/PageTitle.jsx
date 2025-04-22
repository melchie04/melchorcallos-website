import PropTypes from 'prop-types';

const PageTitle = ({ title, subtitle }) => {
  PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  };

  return (
    <div className="flex flex-col justify-center items-center text-center m-3">
      <p className="lg:text-xl sm:text-lg xs:text-md text-base text-secondary-light dark:text-secondary-dark font-semibold select-none my-1">
        {subtitle}
      </p>
      <h1 className="lg:text-5xl sm:text-4xl xs:text-3xl text-2xl text-primary-light dark:text-primary-dark font-bold select-none my-1">
        {title.toUpperCase()}
      </h1>
    </div>
  );
};

export default PageTitle;
