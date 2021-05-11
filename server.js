const express = require("express");
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const Schema = mongoose.Schema;


// database connection  

mongoose.connect("mongodb://localhost:27017/RestrauntsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose schema for restraunts

const restSchema = new Schema({
  name: String,
  operationHours: String,
  offDays: String,
  setOne: String,
  setTwo: String,
  setThree: String,
  setFour: String,
  setFive: String,
});



// Pagination plugin, This will enable server-side pagination I have limited the data results for development and demonstration purposes.
// You would just use react hooks to scroll on the front end and use a post request to update options.page and send the data back as in json format

restSchema.plugin(mongoosePaginate);

  const restraunts = mongoose.model("restraunts", restSchema);

 

  const options = {
      page: 1,
      limit: 100,
      collation: {
          locale: "en",
      },
  };


  // mongoose schema for cart

  const cartSchema = new Schema({
    restrauntName: String,
    items: Array,
    quantity: Array,
    prices: Array,
    cartID: Number
  })

  const cart = mongoose.model('cart', cartSchema)

// mongoose schema for orders

const orderSchema = new Schema({
  restrauntName: String,
  items: Array,
  quantity: Array,
  total: Number,
  address: String,
  name: String
})

const order = mongoose.model("order", orderSchema)


// home route (test)

app.get("/", function (req, res) {
  restraunts.paginate({ }, options, function (err, result) {
    if (!err) {
        
      res.json(result);
    } else {
      res.send(err);
    }
  });
});

// Route for every Restraunt
app.route("/searchid/:_id")

.get(function(req, res){
  const id = req.params._id;

  restraunts.find({_id: id}, function(err, data){
    if(!err){
      res.json(data);

    } else {
      res.send(err)
    }
  })
})



// Route for finding open restraunts 

app.route("/search-days/:dates")

.get(function(req, res){
const days = req.params.dates;

let a = days.split("  ");

let daysRes = a[0];
let timeRes = a[1];

let daysReq = daysRes.split(", ")
let timeReq = timeRes.split(", ")


let exp1 = {offDays: {$in:daysReq}}
let exp2 = {operationHours: {$in: timeReq}}



restraunts.paginate({$and: [exp1, exp2]}, options, function (err, result) {
  if (!err) {
      
    res.json(result);

  } else {
    res.send(err);
  }
});

})

// cart post route with create a cart obect in carts collection

app.post("/cart", function(req, res){
  let resName = req.body.resName;
  let items = req.body.items
  let quantity = req.body.quantity;
  let price = req.body.price;
  let cartID = Math.floor(Math.random()*100000);
  
  

  const Cart = new cart({
    restrauntName: resName,
    items: items,
    quantity: quantity,
    prices: price,
    cartID: cartID

  })
  Cart.save()

  res.json(cartID);


})


// cart get route will get the requested card given the cartID

app.get("/cart/cartnum/:cartID", function(req, res){
  let ID = req.params.cartID

  
  cart.findOne({cartID: ID}, function(err, result){
    
    res.json(result);
  })

  
})

// orders post route will post orders to the orders collection in the database

app.post("/orders", function(req, res){
let name = req.body.name;
let address= req.body.address;
let total= req.body.total;
let quantity = req.body.quantity;
let items = req.body.items;
let resName = req.body.resName;


const Order = new order({
  restrauntName: resName,
  items: items,
  quantity: quantity,
  total:total,
  address: address,
  name: name
})

Order.save()


})


// orders get route will send the data in json to the frontend

app.get("/orders", function(req, res){
  order.find({}, function(err, result){
    res.json(result)
  })

})








app.listen(PORT, () => console.log("server running"));
