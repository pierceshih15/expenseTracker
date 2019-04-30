# 皮皮記帳網

一個使用 Node.js + Express 打造的記帳網站，提供使用者註冊個人帳號，管理自己的餐廳清單，如新增、修改、刪除支出資料等功能，同時，可以依照月份或類別進行篩選。

## 專案畫面

![image](https://github.com/pierceshih15/expenseTracker/blob/master/public/img/demoPage.png)

![image](https://github.com/pierceshih15/expenseTracker/blob/master/public/img/addRecordPage.png)

![image](https://github.com/pierceshih15/expenseTracker/blob/master/public/img/loginPage.png)

## Features - 產品功能

1. 使用者可以藉由第三方快速註冊登入(Facebook)
2. 使用者可以瀏覽全部所有支出
3. 使用者可以新增一筆支出
4. 使用者可以修改一筆支出的資訊
5. 使用者可以刪除一筆支出
6. 使用者可以依照月份或類別進行篩選

## Environment SetUp - 環境建置

1. [MongoDB v4.0 以上](https://www.mongodb.com/download-center/community)
2. [Node.js](https://nodejs.org/en/)

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/pierceshih15/expenseTracker.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd expenseTracker
```

3. 安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

4. 安裝 nodemon 套件

```
在 Terminal 輸入 nodemon app.js 指令
```

5. 匯入種子檔案

```
在 Terminal 找到 Seeder.js 檔案

執行 node .\models\seeds\seeder.js 匯入使用者與餐廳資料
```

當 terminal 出現以下字樣，即表示種子資料已新增至資料庫，按下 ctrl + c 結束執行

```
Mongodb is connected!

User and Record data get ready!
```

6. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

7. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
The Express server is running on http://localhost:3000

Mongodb is connected!
```

現在，你可開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始使用皮皮記帳網囉，歡迎使用官方測試帳號操作。

```
帳號：ming@gmail.com
密碼：1234
```

## Contributor - 專案開發人員

> [Pierce Shih](https://github.com/pierceshih15)
