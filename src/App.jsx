import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar.jsx";
import BookList from "./BookList.jsx";
import SingleBook from "./SingleBook.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

const App = () => {

  const [loginToken, setLoginToken] = useState("");

  return (
    <>
    <Navbar loginToken={loginToken} />
    <Routes>
    <Route path="/" element={<BookList loginToken={loginToken} />} />
    <Route path="/:id/:title/:image/:author/:description/:available" element={<SingleBook />} />
    <Route path="/Login" element={<Login setLoginToken={setLoginToken} />} />
    <Route path="/Register" element={<Register />} />
    </Routes>
    </>
  )
}

export default App