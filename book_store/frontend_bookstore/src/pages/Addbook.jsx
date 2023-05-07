import React from 'react'
import {useState} from "react"
import axios from 'axios'
function Addbook() {

  
  const [name ,setName] = useState('');
  const [author, setAuthor]= useState('')
  const [price,setPrice] = useState(1)
  const [available,setAvailable] = useState(false)
  const [description,setDescription] = useState('')

  const formHandler = (e) => {
    e.preventDefault()
    if( !(name && author && price && description)){
      alert("all fields are required")
      return
    }

    apiPost()

    
  }
  const apiPost = async () => {
    let addBook = {
      name,
      author,
      price,
      available,
      description
    }
    console.log(addBook)
    const add = await axios.post("http://localhost:8000/books",addBook)
    console.log(add)

  }

  return (
    <div className=' '>
      <form action="" className='w-[50%] m-auto md:w-[30%] space-y-6' onSubmit={formHandler}>
        <div>
    <input value={name}  onChange={(e) => setName(e.target.value)} type="text" placeholder='enter book name' className='w-full outline-none border rounded-sm p-2'/>
        </div>
        <div>
        <input value={author}  onChange={(e) => setAuthor(e.target.value)} type="text" placeholder='enter author name' className='w-full outline-none border rounded-sm p-2'/>
        </div>
        <div>
        <input value={price}  onChange={(e) => setPrice(e.target.value)} type="text" placeholder='enter price' className='w-full outline-none border rounded-sm p-2'/>
        </div>
        
        <div >
      <select value={available}  onChange={(e) => setAvailable(e.target.value)} name="" id="" className='w-full outline-none border rounded-sm p-2' placeholder='available'>
        <option value="">available</option>
      <option value= 'true'>True</option>
      <option value= 'false'>False</option>
        
        </select>    

      
          </div>
          <div>
        <textarea value={description}  onChange={(e) => setDescription(e.target.value)} type="text" placeholder='enter description' className='w-full outline-none border rounded-sm p-2'/>
        </div>
      <div className='text-center'>
      <button type='submit' className='px-3 py-1 rounded-sm bg-green-600 text-white hover:opacity-80 text-center'>
          Add Book
        </button>
      </div>
      </form>
      
    </div>
  )
}

export default Addbook
