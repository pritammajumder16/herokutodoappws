const router = require("express").Router();
const todoModel = require("../Models/dbModel").todoModel;
const selectedTodoModel = require("../Models/dbModel").selectedTodoModel;
const bodyParser = require("body-parser").json();

// const item=new todoModel({todo:"sleeep"}).save((err)=>{
//   if(err) throw err;
//   console.log("item saved")
// });

router.get("/todo", (req, res) => {
  console.log(`Get Request made at ${req.url}`);
  todoModel.find({}, (err, data) => {
    if (err) throw err;
    console.log(`data sent`);
    
    res.json(data);
  });
});
router.post("/todo", bodyParser, (req, res) => {
  console.log(`Post Request made at ${req.url}`);
  console.log(req.body);
  todoModel.findOne({todo:req.body.todo},(err,data)=>{
    if(data){
      data.isSelected=req.body.isSelected;
      data.save();
      console.log(data);
      res.json({msg:"item already exists"})

    }
    else{
      const item = new todoModel(req.body).save((err, data) => {
        if (err) throw err;
        console.log("item saved");
        res.json(data);
      })
    }
  })
  
});
router.get("/selectedtodo", (req, res) => {
  console.log(`Request made at ${req.url}`);
  selectedTodoModel.find({}, (err, data) => {
    if (err) throw err;
    console.log("selectedTodo sent");
    res.json(data);
  });
});
router.post("/selectedtodo", bodyParser, (req, res) => {
  console.log(`Request made at ${req.url}`);
  const item = new selectedTodoModel(req.body).save((err, data) => {
    if (err) throw err;
    console.log("selected item saved");
    res.json(data);
  });
});
router.delete("/selectedtodo/:index", (req, res) => {
  console.log(`Request made at ${req.url}`);
  selectedTodoModel.deleteOne({ index: req.params.index }, (err) => {
    if (err) throw err;
    console.log("selected item deleted");
    res.json({msg:"item Deleted"})
  });
});
router.post("/draggedtodo",bodyParser,(req,res)=>{
  console.log(`Request made at ${req.url}`);
  console.log(req.body);
  selectedTodoModel.deleteMany({},(err)=>{
    if (err) throw err;
    selectedTodoModel.insertMany(req.body);
  })
})

module.exports = router;
