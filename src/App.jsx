import BookList from "./BookList.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
    <h1>Welcome to Book Buddy</h1>
    <Routes>
    <Route path="/" element={<BookList />} />
    </Routes>
    </>
  )
}

export default App