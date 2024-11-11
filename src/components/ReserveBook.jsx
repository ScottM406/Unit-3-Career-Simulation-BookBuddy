import { useNavigate } from "react-router-dom";

const ReserveBook = ( {id, loginToken} ) => {

  const navigate = useNavigate();

  const reserveBookRequest = async () => {
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json", "Authorization": `Bearer ${loginToken}`},
      body: JSON.stringify({
        available: false,
      })
    });
  }

  reserveBookRequest();

  return (
    <button onClick={() => reserveBookRequest()}>Reserve Book</button>
  )
}

export default ReserveBook;