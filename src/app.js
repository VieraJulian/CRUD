const express = require("express");
const app = express();
const {resolve} = require("path");
const method = require("method-override");
const {port, start} = require("./modules/port");
const public = require("./modules/public");
app.listen(port, start);
app.set("views", resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(public);
app.use(require("./modules/uploads"))
app.use(express.urlencoded({extended: false})); // los datos que llegan de un formulario convertirlos en req.query(get) & req.body(post)
app.use(express.json()); // no es tan necesario, nos permite procesar infomacion que venga en un formato json
app.use(method("m")) // en la url poner el ?m=PUT - DELETE
app.use(require("./routes/main.routes"));
app.use("/products", require("./routes/products.routes"));
/* app.use(require("/users", "./usersroutes/users.routes")); */