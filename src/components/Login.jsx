import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ( { setLoginToken } ) => {

  const [email,setEmial] = useState("");
  const [password,setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (event) => {

    event.preventDefault();

    try {

    const credPost = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json",} ,
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });

    if (!credPost.ok) {
      throw new Error()
    }

    const responseJSON = await credPost.json();
    const token = responseJSON.token
    setLoginToken(token);

    if (token) {
      setLoginMessage(true);
      setTimeout(() => {
        navigate('/');
      }, 2500);
    }

  } catch (error) {
    alert("Invalid Credentials");
  }

  }

  return (

    loginMessage ? 
      <h1 id="login-ty">Thank you for Logging in! You will be redirected shortly.</h1>
    :
      <>
        <form id="login-form" onSubmit={submitHandler}>
        <h1 id="login-header">Please Log In Below</h1>
          <p>Email:</p>
          <input 
            placeholder= "email"
            type= "email"
            value= {email}
            required
            onChange={(event) => {setEmial(event.target.value)}} />
          <p>Password</p>
          <input 
            placeholder="password"
            type="password"
            value= {password}
            required
            onChange={(event) => {setPassword(event.target.value)}}
          />
          <button type="submit">Log In</button>
          <p id="not-a-member-tip">Not a member? Please register <Link to={"/Register"}>here</Link>.</p>
        </form>
      </>
  )
}

export default Login;