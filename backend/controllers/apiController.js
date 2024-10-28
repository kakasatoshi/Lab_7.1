const Product = require("../Model/Product");
// exports.getData = (req, res) => {
//   try {
//     const data = require("../datas/products.json");
//     console.log(data);
//     if (!data) return res.status(404).send("Data not found");

//     // console.log(data, "data");
//     res.send(data);
//   } catch (error) {
//     console.error("Error loading data:", error);
//     res.status(500).send("Internal server error");
//   }
// };

// console.log("Loading data");

exports.getProduct = (req, res) => {
  Product.fetchAll((products) => {
    res.json(products); // send the products array as JSON
  });
};

exports.postProduct = (req, res) => {
  console.log(req.body, "post");
  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.description,
    req.body.price
  );
  // const { title, imageUrl, description, price } = req.body;
  // const product = new Product(title, imageUrl, description, price);
  product.save((err) => {
    if (err) return res.status(400).send(err);
    // res.send(product);
    // res.send("Product created successfully");

    res.status(201).json({ message: "Product added successfully!" });
  });
};
