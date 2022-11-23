const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const PORT = 3001;

// Routes
app.get("/hello",(req,res) => {
    res.send("Task Manager App");
})

// Set Middlewares

app.use("/api/v1/tasks",tasks)



// app.get('api/v1/tasks')         - Get all the Taska
// app.post('api/v1/tasks')        - Create a new Taska
// app.patch('api/v1/tasks/:id')   - Get a single Task
// app.delete('api/v1/tasks/:id')  - Delete Task

app.listen(PORT, () => console.log(`Server Listening on Port: ${PORT}...`))