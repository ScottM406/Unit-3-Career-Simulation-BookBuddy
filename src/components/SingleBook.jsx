import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReserveBook from "./ReserveBook";

const SingleBook = ( {loginToken} ) => {

  const {id, title, image, author, description, available} = useParams();
  const navigate=useNavigate();
    

  return (
    <div id="single-book-background">
      <style>
        {` #single-book-background::before {background-image: url(${image})}`}
      </style>
      <h1 id="title">{title}</h1>
      <h3 id="single-book-author">by {author}</h3>
      {available === "true" ? <h4 id="available">AVAILABLE!</h4> : <h4 id="unavailable">CHECKED OUT</h4>  }
      <section id="single-book-block">
        <img id="single-book-photo"src={image} alt={`${title}'s cover photo`}/>
        <section id="single-book-block-subsection">
          <p id="single-book-description">{description}</p>
          <button onClick={() => navigate("/")}>Back to Book List</button>
          {loginToken && available === "true" ? <ReserveBook id={id} loginToken={loginToken}/> : null}
        </section>
      </section>
    </div>
  )
}

export default SingleBook;