# 使用 **NVM (Node Version Manager)** 在 **Windows** 上安裝和管理 **Node.js**：


## **1. 下載並安裝 NVM for Windows**
NVM 讓你可以輕鬆切換不同版本的 **Node.js**，但 **Windows 需要使用特定的 NVM 版本**（與 Linux/Mac 版本不同）。

1. **下載 NVM for Windows**  
   前往官方 GitHub 頁面下載安裝程式：[NVM for Windows](https://github.com/coreybutler/nvm-windows/releases)  
   - **選擇最新版本的 `nvm-setup.exe`** 下載。

2. **安裝 NVM**
   - 執行 `nvm-setup.exe` 安裝程式。
   - 在安裝過程中，NVM **預設安裝路徑** 通常是：
     ```
     C:\Program Files\nvm
     ```
   - 它也會建立一個 **Node.js 的存放目錄**（通常在 `C:\Users\你的使用者名稱\AppData\Roaming\nvm`）。

---

## **2. 驗證 NVM 安裝**
安裝完成後，打開 **命令提示字元 (cmd) 或 PowerShell**，輸入：
```sh
nvm version
```
如果成功安裝，會顯示 NVM 的版本號，例如：
```
1.1.10
```

---

## **3. 使用 NVM 安裝 Node.js**
### **（1）查看可用的 Node.js 版本**
輸入：
```sh
nvm list available
```
這會顯示目前可安裝的 **Node.js** 版本，例如：
```
|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|   23.10.0    |   22.14.0    |   0.12.18    |   0.11.16    |
...
```

### **（2）安裝最新的 LTS 版本**
LTS（長期支援版）通常是最穩定的版本：
```sh
nvm install 22.14.0
```

### **（3）切換使用該版本**
```sh
nvm use 22.14.0
```
執行後，NVM 會將這個版本的 Node.js 設定為目前使用的版本。

### **（4）確認 Node.js 安裝成功**
輸入：
```sh
node -v
```
如果成功，應該會顯示：
```
v22.14.0
```
再確認 npm 版本：
```sh
npm -v
```

---

## **4. 管理多個 Node.js 版本**
### **查看已安裝的 Node.js 版本**
```sh
nvm list
```
範例輸出：
```
22.14.0
20.5.1
```

### **切換不同的 Node.js 版本**
假設你已經安裝了 **Node.js 20.5.1**，想要切換到它：
```sh
nvm use 20.5.1
```

### **刪除某個 Node.js 版本**
如果你不再需要某個版本，可以刪除它：
```sh
nvm uninstall 22.14.0
```

---

## **5. 設定預設的 Node.js 版本**
NVM 在每次開啟新的命令提示字元時，不會自動載入上次的版本，你可以執行：
```sh
nvm use 22.14.0
```
或者設定預設版本：
```sh
nvm alias default 22.14.0
```
這樣下次開啟 `cmd` 或 `PowerShell` 時，就會自動使用 **22.14.0** 這個版本。

---

## **6. （可選）解決 NPM 權限問題**
有時候使用 `npm install -g` 來安裝全域套件時，可能會遇到權限問題，可以這樣解決：
```sh
npm config set prefix %APPDATA%\npm
```
然後重新啟動命令提示字元。

---

## **7. 結論**
✅ **成功使用 NVM 安裝並管理 Node.js！** 🚀  
現在你可以使用 **Node.js** 來開發 **Web API、後端服務或 CLI 工具** 了！

---

# 使用 **JavaScript** 建立 Web API，以 **Node.js** 搭配 **Express.js** 框架為例：


## **1. 建立新專案**
1. 開啟 **命令提示字元 (cmd)** 或 **PowerShell**。
2. 建立專案資料夾並進入該資料夾：
   ```sh
   mkdir my-api
   cd my-api
   ```
3. 初始化 Node.js 專案：
   ```sh
   npm init -y
   ```
   這會生成 `package.json` 檔案。

---

## **2. 安裝 Express.js**
Express.js 是一個輕量級的 Web 框架，可以用來快速建立 API。
```sh
npm install express
```

---

## **3. 建立 API 伺服器**
在專案資料夾內建立 `server.js` 檔案，並加入以下程式碼：

```javascript
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
```

---

## **4. 啟動 API 伺服器**
執行以下指令：
```sh
node server.js
```
如果成功，終端機會顯示：
```
API 伺服器運行中：http://localhost:3000
```

---

## **5. 測試 API**
### **方法 1：使用瀏覽器**
打開瀏覽器，進入：
```
http://localhost:3000/api/hello
```
你應該會看到：
```json
{ "message": "Hello, World!" }
```

### **方法 2：使用 curl**
在命令提示字元輸入：
```sh
curl http://localhost:3000/api/hello
```

### **方法 3：使用 Postman**
1. 開啟 **Postman** 或其他 API 測試工具。
2. 建立 `GET` 請求，網址輸入：
   ```
   http://localhost:3000/api/hello
   ```
3. 點擊 **Send**，應該會收到 JSON 回應。

---

## **6. 自動重啟伺服器 (可選)**
在開發過程中，每次修改程式碼都需要手動重啟伺服器，這很麻煩。可以安裝 `nodemon` 自動偵測變更並重啟伺服器：
```sh
npm install -g nodemon
```
然後使用：
```sh
nodemon server.js
```
這樣，每次儲存程式碼後，伺服器會自動重新啟動。


這樣你就完成了一個簡單的 Web API！🚀