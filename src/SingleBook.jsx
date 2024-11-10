import { useParams } from "react-router-dom";
import { useState } from "react";

const SingleBook = ( {loginToken, setBooksReserved} ) => {

  const {id, title, image, author, description, available} = useParams();
  const [isAvailable, setIsAvailable] = useState(useParams().available)

  const clickHandler = () => {
    setBooksReserved([title])
    setIsAvailable("false")
  }

  return (
    <div id="single-book-background">
      <style>
        {` #single-book-background::before {background-image: url(${image})}`}
      </style>
      <h1 id="title">{title}</h1>
      <h3 id="single-book-author">by {author}</h3>
      {available === "true" && isAvailable === "true" ? <h4 id="available">AVAILABLE!</h4> : <h4 id="unavailable">CHECKED OUT</h4>  }
      <section id="single-book-block">
        <img id="single-book-photo"src={image} alt={`${title}'s cover photo`}/>
        <section id="single-book-block-subsection">
          <p id="single-book-description">{description}</p>
          <button>Back to Book List</button>
          {loginToken && available === "true" && isAvailable === "true" ? <button onClick={clickHandler}>Reserve Book</button> : null}
        </section>
      </section>
    </div>
  )
}

export default SingleBook;