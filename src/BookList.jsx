import { useEffect } from "react";
import { useState } from "react";

const BookList = () => {

  const [bookList, setBookList] = useState([]);
  
  useEffect(() => {

    const getBookList = async () => {
      const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books");
      const booksJSON = await response.json();
      const books = booksJSON.books
      setBookList(books);
      console.log(books) // TEST, DELETE
  }

  getBookList();

},[]);

  return (
    <div id="booklist">
    <h2 id="booklist-welcome">You can now browse our library from home! Click on a book to see full details.</h2>
    {bookList.map((book) => (
     <section key={book.id} className="booklist-sections">
      <img className="booklist-cover-photos" src={book.coverimage}/>
      <p>{book.title} by {book.author}</p>
     </section> 
    ))}
    </div>
  )

}

export default BookList;