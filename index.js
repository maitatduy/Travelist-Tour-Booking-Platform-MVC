const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Chỉ định thư mục chưa views
app.set("views", path.join(__dirname, "views"));
// Chỉ định loại view engine
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Trang web đang chạy ở cổng: ${port}`);
});
