import { Link } from "react-router-dom";

const Navbar = ( {loginToken} ) => {
  return (
    <header>
      {loginToken ? <Link to={"/"}>Book List</Link> : <Link to={"/"}>Home</Link>}
      {loginToken ? null : <Link to={"/Login"}>Log In</Link>}
      {loginToken ? null : <Link to={"/Register"}>Register</Link>}
      {loginToken ? <Link to={"/Account"}>Account</Link> : null}
    </header>
  )
}

export default Navbar;