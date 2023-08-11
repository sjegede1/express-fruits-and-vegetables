const express = require("express");
const app = express();
const PORT = 3000;
require("dotenv").config();
const mongoose = require("mongoose");
const Fruit = require("./models/fruit.js");
const Vegetable = require("./models/vegetable.js");

// -------MiddleWare
app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("I run for all routes");
//   res.send('I just popped a whatcumacallit and it just boosted my stamina -Gucci Mane')
  next();
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get("/",(req,res) => {
    res.send('<a href="/fruits">fruits</a> <br /> <a href="/vegetables">vegetables</a>')
})

app.get("/fruits", (req, res) => {
  Fruit.find({}).then((allFruits) => {
    res.render("fruits/Index", {
      fruits: allFruits,
    });
  });
});
// -------------{ Index => All Fruits }

app.post("/fruits", async (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  const newFruit = await Fruit.create(req.body)
//   await res.send(newFruit);
//   console.log(fruits);
  res.redirect("/fruits");
});
// -------{POST}

app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

app.get("/fruits/:id", async (req, res) => {
  const eachFruit = await Fruit.findById(req.params.id)
  await res.render("fruits/Show",{
    fruit: eachFruit
  })
});
// -------------{ Show => Each Fruit }


//=============VEGETABLE
app.get("/vegetables", (req, res) => {
    Vegetable.find({}).then((allVegetables) => {
      res.render("vegetables/Index", {
        vegetables: allVegetables,
      });
    });
  });
  // -------------{ Index => All Vegetables }
  
  app.post("/vegetables", async (req, res) => {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    const newVegetable = await Vegetable.create(req.body)
    // await res.send(newVegetable);
  //   console.log(vegetables);
    res.redirect("/vegetables");
  });
  // -------{POST}
  
  app.get("/vegetables/new", (req, res) => {
    res.render("vegetables/New");
  });
  
  app.get("/vegetables/:id", async (req, res) => {
    const eachVegetable = await Vegetable.findById(req.params.id)
    await res.render("vegetables/Show",{
      vegetable: eachVegetable
    })
  });
  // -------------{ Show => Each Vegetable }

app.listen(PORT, (req, res) => {
  console.log(`Listening on 3k`);
});
// -----------------{Server}
