import app from "./App.js"
const port = parseInt(process.env.port)
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
