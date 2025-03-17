const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors')

// 中介軟體 (Middleware)，用來解析 JSON 請求
app.use(express.json());
app.use(cors())


// 定義 API 路由
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, 123!" });
});

// 定義 我的API 路由
const my_data = [
  {
    "longitude": 120.5646,
    "latitude": 25.0335,
    "height": 150,
    "heading": 0,
    "length": 500
  }
]

app.get("/items", (req, res) => {
  res.json(my_data);
  console.log("GET Items");
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`API 伺服器運行中：http://localhost:${port}`);
});