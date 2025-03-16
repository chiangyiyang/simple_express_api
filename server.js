const express = require("express");
const app = express();
const port = 3000;

// 中介軟體 (Middleware)，用來解析 JSON 請求
app.use(express.json());

// 定義 API 路由
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`API 伺服器運行中：http://localhost:${port}`);
});