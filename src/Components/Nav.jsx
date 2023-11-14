import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="bg-blue-800 fixed w-screen py-4 px-4 bg-opacity-33">
      <Link to="/">
        <h5 className=" text-white font-bold">ChicVista</h5>
      </Link>
    </header>
  );
};

export default Nav;
