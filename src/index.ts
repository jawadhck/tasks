import type { Task } from "./types.ts"
import express from "express";

const app = express();

app.listen(3000);


const tasks: Task[]= [];
app.use(express.json());

app.get("/",(req,res)=>{
res.send("Task API is running");
});

app.get("/tasks", (req, res) => {
   res.json(tasks);
  });

  app.post("/tasks",(req,res)=>{
    const title= req.body.title;
if(!title || type of title !=="string"){
    return res.status(400).json({
error:"Title is required and must be a string"
    });
    
}

    const task={
        id:tasks.length+1,
        title:title,
        completed:false,
    }
    tasks.push(task);

    res.status(201).json(task);
  });