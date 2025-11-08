var express = require('express')
const app = express()
// var bodyParser = require('body-parser')
// const morgan =require('morgan')
require("dotenv").config({path: '../.env'});
const cors =require('cors')
// Backend runs on port 3001, frontend on 5000
const port = process.env.BACKEND_PORT || 3001;
const cookie_parser=require("cookie-parser")
const mongoose =require('mongoose')
const routes = require('./routes/auth')
const category = require('./routes/category')
const passport = require('passport');
var path = require('path');
// Enable trust proxy for Replit environment
app.enable("trust proxy")

// Configure CORS for Replit - allow frontend and Replit preview
app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        // Allow all Replit domains and localhost for development
        if (origin.includes('replit.') || origin.includes('localhost') || origin.includes('127.0.0.1')) {
            return callback(null, true);
        }
        return callback(null, true); // Allow all origins for now
    },
    credentials: true
}));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(cookie_parser())
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));
//Data parsing
app.use(express.json())
// app.use(express.urlencoded({extended:false}))
//Express session
// app.use(session({
//     secret:'secret',
//     resave:true,
//     saveUninitialized:true
// }))
//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// app.use(cookieSession({
//     name:'session',
//     keys:['key1','key2']
// }))
// passport.serializeUser(function(user, done) {
//     console.log('serialize')
//     done(null, user.email);
//   });

// passport.deserializeUser(function(id, done) {
//     console.log('deserialize')

//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
// });

// mongoose.connect('mongodb+srv://swarupkumar:eashok410@lfs.q2in2.mongodb.net/test',{
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// })

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.6kk18.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
})

mongoose.connection.on('connected',()=>{
    console.log('Database connected !')
})

app.use('/',routes)
app.use('/',category)


app.listen(port,()=> console.log(`Listening to port ${port} !!`))
