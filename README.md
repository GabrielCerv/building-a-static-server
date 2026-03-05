# Building-a-web-static-server
# 

## Set Up

1. Create a GitHub repo named `static-web-server-practice`
2. Clone it to your machine
3. From the project root, run:
   ```bash
   npm create vite@latest
   ```
4. Create and enter the server directory:
   ```bash
   mkdir server
   cd server
   ```
5. Initialize the server project:
   ```bash
   npm init
   touch serve.js
   npm i express dotenv && npm i nodemon -D
   ```

## Building the Server

In `serve.js`:

1. Import **express** and **path**

```js
const express = require('express');
const path = require('path');
```

2. Create your Express app

```js
const app = express();
```

3. Set up your app listener (e.g. `app.listen(port, ...)`)

```js
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Serving static assets.

1. `cd` into the frontend directory and run the `build` command.

```bash
cd ../frontend && npm i && npm run build
```

2. In the `serve.js` file add the following:

```js

// the file path to the dist directory
const pathToFrontend = path.join(__dirname, '../frontend/dist');

// generate middleware using the file path
const serveStatic = express.static(pathToFrontend);

// Register the serveStatic middleware before the remaining controllers
app.use(serveStatic);

// other controllers 
```

## Make a `build` command and `start` command

In your `package.json`, add the following scripts:

```json
"build": "cd ../frontend && npm i && npm run build && cd ../server && npm i",
"start": "node serve.js"
```
