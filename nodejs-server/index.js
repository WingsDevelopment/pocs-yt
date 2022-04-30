var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.listen(3010, () => {
  console.log("Server running on port 3010");
});

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

let errorSwitcher = 1;

const delay = 750;

let apple = {
  id: 0,
  name: "Apple #0",
  description: "Apple is a fruit",
};
let apple1 = {
  id: 1,
  name: "Apple #1",
  description: "Apple is a fruit",
};
let apple2 = {
  id: 2,
  name: "Apple #2",
  description: "Apple is a fruit",
};
let apple3 = {
  id: 3,
  name: "Apple #3",
  description: "Apple is a fruit",
};
let apple4 = {
  id: 4,
  name: "Apple #4",
  description: "Apple is a fruit",
};
let apple5 = {
  id: 5,
  name: "Apple #5",
  description: "Apple is a fruit",
};
let apple6 = {
  id: 6,
  name: "Apple #6",
  description: "Apple is a fruit",
};
let apple7 = {
  id: 7,
  name: "Apple #7",
  description: "Apple is a fruit",
};
let apple8 = {
  id: 8,
  name: "Apple #8",
  description: "Apple is a fruit",
};
let apple9 = {
  id: 9,
  name: "Apple #9",
  description: "Apple is a fruit",
};
let ginger = {
  id: 10,
  name: "Ginger",
  description: "Ginger is a gingerbread",
};

let data = [
  apple,
  apple1,
  apple2,
  apple3,
  apple4,
  apple5,
  apple6,
  apple7,
  // apple8,
  // apple9,
  ginger,
];
let currentId = data.length;

app.get("/getAll", (req, res) => {
  setTimeout(() => {
    res.json(data);
  }, delay);
});

app.get("/getByPage", (req, res) => {
  setTimeout(() => {
    const perPage = Number(req.query.perPage);
    const page = Number(req.query.page);
    const start = page * perPage;
    const end = start + perPage;
    const result = data.slice(start, end);
    res.json(result);
  }, delay);
});

app.get("/getTotalCount", (req, res) => {
  setTimeout(() => {
    res.json(data.length);
  }, delay);
});

app.get("/getById", (req, res) => {
  setTimeout(() => {
    const id = req.query.id;
    const result = data.find((item) => item.id === Number(id));
    res.json(result);
  }, delay);
});

app.post("/create", (req, res, next) => {
  setTimeout(() => {
    if (++errorSwitcher % 2 == 0) return next("error");

    const newFruit = {
      id: ++currentId,
      name: req.body.name,
      description: req.body.description,
    };
    data.push(newFruit);
    res.json(newFruit);
  }, delay);
});

app.put("/update", (req, res, next) => {
  setTimeout(() => {
    if (++errorSwitcher % 2 == 0) return next("error");

    const id = req.body.id;
    const fruit = data.find((item) => item.id === Number(id));
    fruit.name = req.body.name;
    fruit.description = req.body.description;
    res.json(fruit);
  }, delay);
});
