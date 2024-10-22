exports.getData = (req, res) => {
  
  try {
    const data = require("../datas/products.json");
    console.log(data);
    if (!data) return res.status(404).send("Data not found");

    console.log(data, "data");
    res.send(data);
  } catch (error) {
    console.error("Error loading data:", error);
    res.status(500).send("Internal server error");
  }
};

console.log("Loading data");
