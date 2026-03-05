const express = require('express');
const path = require('path');

const app = express();

const superpowers = [
    {
        ability: "Flying",
    },
    {
        ability: "Invisibility",
    },
    {
        ability: "Super Strength",
    },

];
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// the file path to the dist directory
const pathToFrontend = path.join(__dirname, '../frontend/dist');

// generate middleware using the file path
const serveStatic = express.static(pathToFrontend);

const logRoutes = (req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next(); // Passes the request to the next middleware/controller
};
// Register the logRoutes middleware globally to log all requests
app.use(logRoutes);

// Register the serveStatic middleware before the remaining controllers
app.use(serveStatic);


const serveSuperpowers = (req, res, next) => {
    res.send(superpowers);
}
// other controllers 

app.get('/api/superpowers', serveSuperpowers);

