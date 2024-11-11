import { useNavigate } from "react-router-dom";

const Logout = ( { setLoginToken }) => {

  const navigate = useNavigate();

  const clickHandler = () => {
    setLoginToken("");
    navigate("/")
  }

  return (
  <button onClick={() => clickHandler()}>Log Out</button>
  )
}

export default Logout;