import { useState } from "react"
import { Link } from "react-router-dom";

const Register = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState("");

  const submitHandler = async (event) => {

    event.preventDefault();

    const postNewUser = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register", {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password
      }),
    })

    const responseJSON = await postNewUser.json();
    const token = responseJSON.token;
    setUserToken(token)
  }

  return (
    <>
    { userToken ?
    <h1 id="register-ty">Thank you for resigstering! Please <Link to={"/Login"}>log in</Link> to continue.</h1>
    :
    <form id="register-form" onSubmit={submitHandler}>
    <h1 id="register-header">Please Register Below</h1>
      <p>First Name:</p>
      <input 
        placeholder="first name"
        type="text"
        pattern="[A-Za-z\s]+"
        title="No numbers or special characters alllowed."
        value= {firstName}
        onChange={(event) => setFirstName(event.target.value)}
        required
      />
      <p>Last Name:</p>
      <input 
        placeholder="last name"
         type="text"
         pattern="[A-Za-z\s]+"
         title="No numbers or special characters alllowed."
         value= {lastName}
         onChange={(event) => setLastName(event.target.value)}
         required
      />
      <p>Email:</p>
      <input 
        placeholder="email"
        type="email"
        value= {email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <p>Password:</p>
      <input 
        placeholder="password"
        type="password"
        value= {password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button type="submit">Register</button>
      <p id="already-a-member-tip">Already a member? Please log in <Link to={"/Login"}>here</Link></p>
    </form> }
    </>
  )
}

export default Register;