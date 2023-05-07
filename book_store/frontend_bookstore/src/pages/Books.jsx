import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
function Books() {
 const [books,setBooks] = useState()

 const bookApi = async () => {
  try{
    const {data} = await axios.get('http://localhost:8000/books')
    console.log(data.books)
    setBooks(data.books)
  }
  catch(err){
    console.log(err)
  }
 }

 useEffect(()=>{
   bookApi()
 },[])

 if (books === undefined){
  return(
    <div className='text-center text-gray-600'>Books not found</div>
  )
 }

  return (
    <div className='flex justify-center space-x-10 m-4'>
      
      {
        books.map(book => (
          <div key={book._id} className='border-2 p-4 rounded-sm' >
            <div>
              <img src="" alt="" />
            </div>
            <div className=''>
              
                <h1>name: <span className='text-blue-500 font-bold'>{book.name}</span> </h1>
                <h2>author: {book.author}</h2>
                <span>price: {book.price}</span>
                <p>description: {book.description}</p>
              
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Books
