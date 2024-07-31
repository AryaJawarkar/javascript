let express = require("express");
let fs = require("fs");
const app = express();

app.use(express.json());

const getAllTodos = (data) => {
  const lines = data.split("\n");
  return lines.map((line) => {
    const [id, title, desc] = line.split("-");
    return { id, title, desc };
  });
}
const flatten = (data) => {
  let out = '';
  data.map(item => {
    out += `${item.id}-${item.title}-${item.desc}\n`;
  });
  return out;
}

const saveTodosToFile = (todos) => {
  fs.writeFileSync(__dirname + "/a.txt", flatten(todos), (err) => {
    if (err) {
      console.log("Error while updating data");
      return;
    }

  })
}

app.get('/todos', (req, res) => {
  fs.readFile(__dirname + "/a.txt", "utf-8", (err, data) => {
    if (err) {
      return res.status(400).send("error loading file");
    }
    try {
      const todos = getAllTodos(data);
      //console.log(todos);
      res.status(200).json(todos);
    } catch (e) {
      res.status(500).send("Error reading data");
    }
  })
});

app.get('/todos/:id', (req, res) => {
  fs.readFile(__dirname + "/a.txt", "utf-8", (err, data) => {
    if (err) {
      return res.status(400).send("error loading file");
    }
    try {
      const todos = getAllTodos(data);
      //console.log(todos.length);
      const todo = todos.find((todo) => {
        if (todo.id === req.params.id) {
          console.log(todo);
          res.status(200).json(todo);
        }
      })
    } catch (e) {
      res.status(500).send("Error reading data");
    }
  })
});

app.post('/todos', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send("give a valid todo");
  }
  fs.readFile(__dirname + "/a.txt", "utf-8", (err, data) => {
    if (err) {
      return res.status(400).send("error reading file");
    }
    const todos = getAllTodos(data);
    const newId = todos.length > 0 ? todos.length : "1";
    const newTodo = `${newId}-${title}-${description}`;
    console.log(newTodo);
    fs.appendFile(__dirname + "/a.txt", `${newTodo}\n`, (err) => {
      if (err) {
        return res.status(500).send("error writing to file");
      }
      res.status(201).json({ id: newId });
    });
  });
});

app.put('/todos/:id', (req, res) => {
  const { title, description } = req.body;
  fs.readFile(__dirname + "/a.txt", "utf-8", (err, data) => {
    if (err) {
      return res.status(400).send("error reading file");
    }
    const todos = getAllTodos(data);
    console.log(todos);
    console.log(req.params);
    const todo = todos.find(t => t.id === req.params.id);
    console.log(todo);
    if (todo) {
      todo.title = title;
      todo.desc = description;
      saveTodosToFile(todos);
      res.status(200).send("Todo Updated");
    }
    res.send(404).send("Todo not found");
  })
});

app.delete('/todos/:id', (req, res) => {
  fs.readFile(__dirname + "/a.txt", "utf-8", (err, data) => {
    if (err) {
      return res.status(400).send("error reading file");
    }
    const todos = getAllTodos(data);
    console.log(todos);
    todos.splice(req.params.id - 1, 1);
    console.log(todos);
    saveTodosToFile(todos);
    res.status(200).send("Todo Deleted");

  });
});

app.listen(3000, () => {
  console.log("listening on 3000");
});  
