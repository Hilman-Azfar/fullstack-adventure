const { response } = require("express");
const express = require("express");
const { request } = require("http");
const path = require("path");

const app = express();

// routes
app.get("/", async (request, response) => {
    const pathUrl = path.resolve(__dirname + "/../frontend/simple.html")
    response.sendFile(pathUrl);
});

app.get("/validate", (request, response) => {
    const { name, password } = request.query;
    // validate 
    // if ok 200
    // else 403

    if (name === "ws" && password === "ws") {
        response.send("success").status(200);
    } else {
        response.sendStatus(403);
    }
});

app.get("/comment/:howwouldyouknow", (request, response) => {
    const books = {
        "bible": "holy",
        "quran": "holy"
    }

    const { howwouldyouknow } = request.params;
    response.send(books[howwouldyouknow]).status(200);
})

// catch all handler
app.get("/*", (request, response) => {
    response.sendStatus(404);
});

// middlewares

// error handling middleware
const port = 6969;

app.listen(port, () => {
    console.log(`Server is up! Listening on port: ${port}`)
})
