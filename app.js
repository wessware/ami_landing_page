const { config } = require('dotenv');
const path = require("path");

const express = require("express")
const expressLayouts = require('express-ejs-layouts')

config();

const app= express();
const port = 3000 || process.env.PORT 

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//static files
app.use(express.static('public'))

//templating engine
app.use(expressLayouts)
app.set("layout", './layouts/main');
app.set('view engine', 'ejs');
app.use("/p", express.static(path.resolve("public")));

//routes
app.use('/', require('./server/routes/index'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
