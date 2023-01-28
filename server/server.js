const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");
const cors = require("cors");

const app = express();

const PORT = 8080;

const restaranSchema = new mongoose.Schema({
name: String,
position: String,
desc: String,
img: String,
});

const restaranModel = mongoose.model("restaran", restaranSchema);

mongoose.set("strictQuery", false);
mongoose

.connect("mongodb+srv://Af201:UNj9fdLD5diTT9rH@cluster0.lvpvqcd.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Connected to database"))
.catch((err) =>console.error(err));



const addrestaranSchema = Joi.object({
    name: Joi.string().required(),
    position: Joi.string().required(),
    desc: Joi.string().required(),
    img: Joi.string().required(),
  });

  app.use(express.json());
  app.use(cors())

 
app.post(
    "/api/restarans",   (req, res, next) => {
      const newrestaran = new restaranModel({ ...req.body });
  
      console.log(req.body);
       newrestaran.save();

      res
        .status(201)
        .send({ message: "Product succesfully added!", product: newrestaran });
    }
  );
  
  
  app.get("/api/restarans", (req, res) => {
     restaranModel.find({}, (error, products) => {
      if (error) return res.status(500).send({ error });
      res.send(products);
    });
  });
  
  
  app.delete("/api/restarans/:id", (req, res) => {
    if (req.params.id)
      restaranModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) return res.status(500).send({ error });
  
        res.send(data);
      });
  });
  
  
  
 
  app.listen(PORT, () => {
    console.log("Server running on " + PORT);
  });
  
  

// UNj9fdLD5diTT9rH