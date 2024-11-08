import { Routes, Route } from "react-router-dom";
import BookList from "./BookList.jsx";
import SingleBook from "./SingleBook.jsx"
import Login from "./Login.jsx";

const App = () => {

  return (
    <>
    <Routes>
    <Route path="/" element={<BookList />} />
    <Route path="/:id/:title/:image/:author/:description/:available" element={<SingleBook />} />
    <Route path="/Login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App