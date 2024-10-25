const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent); // Chuyển file JSON thành mảng đối tượng
      }
      products.push(this); // Thêm sản phẩm mới vào mảng

      // Lưu mảng sản phẩm vào file JSON
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]); // Nếu có lỗi, trả về mảng trống
      } else {
        cb(JSON.parse(fileContent)); // Chuyển file JSON thành mảng đối tượng và trả về qua callback
      }
    });
  }
};
