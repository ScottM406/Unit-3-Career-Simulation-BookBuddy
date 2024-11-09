import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import BookList from "./BookList.jsx";
import SingleBook from "./SingleBook.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

const App = () => {

  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<BookList />} />
    <Route path="/:id/:title/:image/:author/:description/:available" element={<SingleBook />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    </Routes>
    </>
  )
}

export default App