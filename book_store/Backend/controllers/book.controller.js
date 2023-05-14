
import Book from "../models/Book.js";

export const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    res.status(401).json({ message: "No Book Found" });
  }
  return res.status(200).json({ books });
};

export const findBook = async(req,res) => {
  const id = req.params.id;
  let bookFound;
  if(!id){
    console.log("all fields are required");
  }
  else {
    try {
      bookFound =await Book.findById({_id:id});
      console.log(bookFound)

    } catch (err) {
      console.log(err)
    }
  }
  if(!bookFound){
    res.status(500).json({message:"unable to find"})
  }
  res.status(200).json({bookFound})

}

export const createBooks = async (req, res) => {
  console.log(req.body)
  const { name, author, description, price, available } = req.body;
  console.log(name, author, description, price, available)
  let bookCreated ;
  if (!(name && author && description && price && available)) {
    console.log("require all fields");
  } else {
    try {
    bookCreated =await Book.create({
        name,
        author,
        description,
        price,
        available,
      });
    } catch (err) {
      console.log(err)
    }
  }
  if(!bookCreated){
    res.status(500).json({message:"unable to add"})
  }
  res.status(200).json({bookCreated})
};


export const updateBooks = async(req,res) => {
  const id = req.params.id;
  let bookUpdated;
  const {name,author,description,price,available} = req.body;
  if (!(name && author && description && price && available)) {
    console.log("require all fields");
  } else {
    try {
    bookUpdated =await Book.findByIdAndUpdate(id,{
        name,
        author,
        description,
        price,
        available,
      });
      bookUpdated = await bookUpdated.save()

    } catch (err) {
      console.log(err)
    }
  }
  if(!bookUpdated){
    res.status(500).json({message:"unable to add"})
  }
  res.status(200).json({bookUpdated})

}

export const deleteBook = async(req,res) => {
  const id = req.params.id;
  let bookDeleted ;
  console.log(id)
  if (!(id)) {
    console.log("require id  fields");
  } else {
    try {
    bookDeleted =await Book.findOneAndRemove({_id:id});
      console.log(bookDeleted)

    } catch (err) {
      console.log(err)
    }
  }
  if(!bookDeleted){
    res.status(500).json({message:"unable to add"})
  }
  res.status(200).json({bookDeleted})

}

