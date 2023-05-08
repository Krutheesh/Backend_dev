import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Books() {
  const [books, setBooks] = useState([]);


  const bookApi = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/books");
      // console.log(data.books);
    
      setBooks(data.books);

    } catch (err) {
      console.log(err);
    }
  };

  const deleteBook =  async(id) => {
    console.log(id)
      const del = await axios.delete(`http://localhost:8000/books/${id}`)
      console.log(del)
  }

  useEffect(() => {
    bookApi();
  }, []);
  console.log(books)
  if (books === []) {
    return <div className="text-center text-gray-600">Books not found</div>;
  }

  return (
    <div className="flex justify-center flex-wrap space-x-10 m-4 space-y-7">
      {books.map((book) => (
        <div key={book._id} className="border-2 p-4 rounded-sm">
          <div>
            <img src="" alt="" />
          </div>
          <div className="">
            <h1>
              name: <span className="text-blue-500 font-bold">{book.name}</span>{" "}
            </h1>
            <h2>author: {book.author}</h2>
            <span>price: {book.price}</span>
            <p>description: {book.description}</p>
            <div className="flex text-white justify-between ">
              <Link to={`/${book._id}`}>
               
                <button className="py-1 px-2 rounded-sm bg-green-600">
                  update
                </button>
              </Link>
             
              <button className="py-1 px-2 rounded-sm bg-red-600" onClick={() => {
                deleteBook(book._id)
                 
              }}>
                delete {book._id}
              </button>
            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Books;
