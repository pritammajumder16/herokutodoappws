const express = require("express");
const Todoroutes = require("./Controller/routing");
const app = express();
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 8080;
//adding cors
app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

// app.get("*",(req,res)=>{
//   res.sendFile(path.join(__dirname,"public/index.html"))
// })

//Set router for todo api
app.use("/todo", Todoroutes);

app.listen(port, () => {
  console.log("Todo Server Listening on port 8080");
});
