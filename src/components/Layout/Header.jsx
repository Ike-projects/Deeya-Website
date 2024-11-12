import Navigation from "./Navigation";
const Header = ({isAbsolute}) => {
  return (
    <header className={`${isAbsolute ? 'absolute' : ''} top-0 flex justify-center z-50 w-full xl:px-0 md:px-10 px-5`}>
      <Navigation />
    </header>
  );
};

export default Header;
