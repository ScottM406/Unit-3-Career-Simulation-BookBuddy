import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to={"/"}>Home</Link>
      <Link to={"/Login"}>Login</Link>
      <Link to={"/Register"}>Register</Link>
    </header>
  )
}

export default Navbar;