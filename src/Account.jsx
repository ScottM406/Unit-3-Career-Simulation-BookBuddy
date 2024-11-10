import { useEffect } from "react";
import { useState } from "react"

const Account = ( { loginToken, booksReserved } ) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    const loadAccountDetails = async () => {
      
      const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me", {
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${loginToken}`}
      });
      const detailsJSON = await response.json();
      setFirstName(detailsJSON.firstname);
      setLastName(detailsJSON.lastname);
      setEmail(detailsJSON.email);

    }

    loadAccountDetails();
    console.log(booksReserved)

  },[])
  
  return (

    <div id="account-info">
    <h1 id="account-full-name">{firstName} {lastName}</h1>
    <p>{email}</p>
    <hr/>
    <h2>Your Book Reservations:</h2>
    <ul>
      <li>{booksReserved}</li>
    </ul>
    </div>
  )
  }


export default Account;