import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="bg-[url(/herobild.png)] min-h-svh ">
      <header className="flex gap-3 justify-between items-center pt-10 ">
        <Link to="/">
          <img className="ml-10 " src="./logo.png" />
        </Link>
        <nav className="flex gap-7  mr-10 items-center text-white">
          <Link to="/">Home</Link>
          <Link to="/about us">About us</Link>
          <Link to="/furniture">Furniture</Link>
          <Link to="/contact us">Contact us</Link>
          <Link
            className="border-2 border-white border-solid  rounded-lg px-3 py-1"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="border-2 border-white border-solid rounded-lg bg-yellow-500 px-3 py-1"
            to="/sign up"
          >
            Sign up
          </Link>
        </nav>
      </header>

      <h1 className=" text-white text-center text-5xl pt-64">
        Everyone Loves To Welcome A<br /> Good Furniture
      </h1>
    </section>
  );
};

export default Header;
