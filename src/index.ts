import type { Task } from "./types.ts"
import express from "express";

const app = express();
app.use(express.json());
let nextId=1;




const tasks: Task[]= [];


app.get("/",(req,res)=>{
res.send("Task API is running");
});

app.get("/tasks", (req, res) => {
   res.json(tasks);
  });

  app.patch("/tasks/:id",(req,res)=>{
    const id=Number(req.params.id);
    const task= tasks.find(t=>t.id===id);
    if(!task){
        return res.status(404).json({error:"Task not found"});}
    task.completed=true;
    return res.status(200).json(task);
      });

  app.post("/tasks",(req,res)=>{
    const title= req.body?.title;
if(!title || typeof title !=="string"){
    return res.status(400).json({
error:"Title is required and must be a string"
    });
    
}

    const task: Task={
        id: nextId++,
        title:title,
        completed:false,
    }
    tasks.push(task);

    res.status(201).json(task);
  });

  app.get("/tasks/:id", (req,res)=>{
const id=Number(req.params.id);
const task= tasks.find(t=>t.id===id);
if(!task){
  return res.status(404).json({error:"Task not found"});}
  return res.status(200).json(task);
  });


  app.listen(3000, () => {
    
    console.log("Server running on port 3000");
  });
