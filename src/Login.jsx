import { useState } from "react";

const Login = () => {

  const [email,setEmial] = useState("");
  const [password,setPassword] = useState("");

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

    console.log(credPost);
    const responseJSON = await credPost.json();
    console.log(responseJSON);
  }

  return (
    <>
    <h1>Please Log In Below</h1>
    <form onSubmit={submitHandler}>
      <p>Email:</p>
      <input 
      placeholder= "email"
      type= "email"
      value= {email}
      onChange={(event) => {setEmial(event.target.value)}} />
      <p>Password</p>
      <input 
      placeholder="password"
      type="password"
      value= {password}
      onChange={(event) => {setPassword(event.target.value)}}
       />
      <button type="submit">Log In</button>
    </form>
    <p>Not a member? Please register here.</p>
    </>
  )
}

export default Login;