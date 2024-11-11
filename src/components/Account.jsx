import { useEffect } from "react";
import { useState } from "react";
import Logout from "./Logout.jsx";

const Account = ( { loginToken, setLoginToken } ) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [booksReserved, setBooksReserved] = useState([]);

  useEffect(() => {

    const loadAccountDetails = async () => {
      
      const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me", {
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${loginToken}`}
      });
      const detailsJSON = await response.json();
      setFirstName(detailsJSON.firstname);
      setLastName(detailsJSON.lastname);
      setEmail(detailsJSON.email);
      setBooksReserved(detailsJSON.books)
      console.log(detailsJSON.books);

    }

    loadAccountDetails();
    console.log(booksReserved)

  },[])
  
  return (

    <div id="account-info">
    <h1 id="account-full-name">{firstName} {lastName}</h1>
    <p>{email}</p>
    <Logout setLoginToken={setLoginToken}/>
    <br/>
    <hr/>
    <h2>Your Book Reservations:</h2>
    {booksReserved.map((book) => (
      <p>{book.title}</p>
      
))}
    </div>
  )
  }


export default Account;