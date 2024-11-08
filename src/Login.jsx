import { useState } from "react";

const Login = () => {

  const [email,setEmial] = useState("");
  const [password,setPassword] = useState("");
  const [loginToken, setLoginToken] = useState("");

  const submitHandler = async (event) => {

    event.preventDefault();

    const credPost = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json",} ,
      body: JSON.stringify({
        email: email,
        password: password
      }),
    });

    const responseJSON = await credPost.json();
    const token = responseJSON.token
    setLoginToken(token);
  }

  return (
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
      <p id="not-a-member-tip">Not a member? Please register here.</p>
    </form>

    </>
  )
}

export default Login;