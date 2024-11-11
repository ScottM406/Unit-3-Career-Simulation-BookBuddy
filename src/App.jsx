import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import BookList from "./components/BookList.jsx";
import SingleBook from "./components/SingleBook.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Account from "./components/Account.jsx"

const App = () => {

  const [loginToken, setLoginToken] = useState("");
  const [booksReserved, setBooksReserved] = useState([]);

  return (
    <>
    <Navbar loginToken={loginToken} />
    <Routes>
    <Route path="/" element={<BookList loginToken={loginToken} />} />
    <Route path="/:id/:title/:image/:author/:description/:available" element={<SingleBook loginToken={loginToken} setBooksReserved={setBooksReserved}/>} />
    <Route path="/Login" element={<Login setLoginToken={setLoginToken} />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Account" element={<Account loginToken={loginToken} booksReserved={booksReserved} setLoginToken={setLoginToken} />} />
    </Routes>
    </>
  )
}

export default App