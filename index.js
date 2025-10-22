const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Kết nối MongoDB sử dụng Mongoose
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);

const clientRoutes = require("./routers/client/index.route");

// Chỉ định thư mục chưa views
app.set("views", path.join(__dirname, "views"));
// Chỉ định loại view engine
app.set("view engine", "pug");

// Chỉ định thư mục chưa file tĩnh bên phía client
app.use(express.static(path.join(__dirname, "public")));

// Thiết lập đường dẫn
app.use("/", clientRoutes);

app.listen(port, () => {
  console.log(`Trang web đang chạy ở cổng: ${port}`);
});
