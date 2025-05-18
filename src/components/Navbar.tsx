import GetStartedButton from "./GetStartedButton";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-between md:px-12 px-6 bg-yellow/10 backdrop-blur-3xl shadow-sm">
      <Logo />
      <div className="md:block hidden">
        <GetStartedButton />
      </div>
    </nav>
  );
}

export default Navbar;
