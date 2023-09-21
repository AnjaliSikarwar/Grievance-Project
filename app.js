const express = require('express')
//console.log(express)
const app = express()
const port = 3000
const web = require('./routes/web')
const connectdb = require('./db/connectdb')
//cookies
const cookieparser = require('cookie-parser')
//for msg show 
const session = require('express-session')
let flash = require('connect-flash');
const fileUpload = require("express-fileupload");
//for file upload
app.use(fileUpload({ useTempFiles: true }));


app.use(cookieparser());

//view engine ejs tempelate or Embedded Javascript tempelates
app.set('view engine', 'ejs')

//for images and css
app.use(express.static('public'))

//dbconnection
connectdb()

//data show or get
app.use(express.urlencoded({ extended: true }))


app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
}));

app.use(flash());

//routing load
app.use('/', web)



//server create
//listen ka kaam hota hai server ko chalana
app.listen(port, () => {
    console.log(`server is running localhost:${port}`)

})