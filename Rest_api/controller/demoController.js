
import dummy from "../models/demo.js";

export const control = (req,res)=> {
  res.status(200).send(dummy)
}
let ic = 1
export const control2 = (req,res) => {
  const idea = req.body;
  console.log(idea)
  idea.id=++ic;
  dummy[ic]= idea;
  res.status(201).send(dummy[ic])

}

export const control3 = (req,res) => {
  const up = req.params.id;
  console.log(req.params)
  if(dummy[up]){
    dummy[up]=req.body
    res.status(200).send(dummy[up])
  }
  res.status(400).send("id not there ra howle")
}

export const control4 = (req,res) => {
  const del = req.params.id
  if(del){
    delete dummy[del]
    res.status(200).send("delete chesam")

    
  }
}