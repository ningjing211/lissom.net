// const express = require("express");
// const next = require("next");
// const path = require("path");

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const PORT = 3000; // 指定在 3000 埠口運行

// app.prepare().then(() => {
//   const server = express();

//   // 提供 blog 目錄內的靜態資源
//   server.use("/blog", express.static(path.join(__dirname, "blog")));

//   // 讓 Next.js 處理其他所有請求
//   server.all("*", (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(3000, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
//   });
// });
