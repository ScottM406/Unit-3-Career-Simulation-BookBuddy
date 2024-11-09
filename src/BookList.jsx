import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const BookList = () => {

  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {

    const getBookList = async () => {
      const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books");
      const booksJSON = await response.json();
      const books = booksJSON.books
      setBookList(books);
  }

    getBookList();

},[]);

  const clickHandler = (bookID, title, image, author, description, available) => {
    navigate(`/${bookID}/${title}/${encodeURIComponent(image)}/${author}/${description}/${available}`);
  }

  return (
    <div id="booklist">
      <h1 id="welcome-header">Welcome to Book Buddy</h1>
      <h2 id="booklist-welcome">
        You can now browse our library from home, and reserve books! Click on a book to see full details. 
        To reserve books and view your reserved books, you must be logged in. Click {<Link to="/login">here</Link>} to log in, or 
        click <Link to="/register">here</Link> to register!
      </h2>
      {bookList.map((book) => (
      <section key={book.id} className="booklist-sections" onClick={() => clickHandler(book.id,book.title,book.coverimage,book.author,book.description,book.available)}>
        <img className="booklist-cover-photos" src={book.coverimage} alt={`${book.title}'s cover photo`}/>
        <p>{book.title} by {book.author}</p>
     </section> 
    ))}
    </div>
  )

}

export default BookList;