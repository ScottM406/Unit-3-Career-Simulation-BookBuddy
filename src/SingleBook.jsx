import { useParams } from "react-router-dom";

const SingleBook = () => {

  const {id, title, image, author, description, available} = useParams();

  return (
    <div id="single-book-background">
      <style>
        {` #single-book-background::before {background-image: url(${image})}`}
      </style>
      <h1 id="title">{title}</h1>
      <h3 id="single-book-author">by {author}</h3>
      {available === "true" ? <h4 id="available">AVAILABLE!</h4> : <h4 id="unavailable">CHECKED OUT</h4>  }
      <img id="single-book-photo"src={image} alt={`${title}'s cover photo`}/>
      <p id="single-book-description">{description}</p>
    </div>
  )
}

export default SingleBook;