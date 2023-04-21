import express, {Request, Response} from 'express';
import bodyParser from "body-parser";
import router from './routers/router'
import mongoose from "mongoose";
const app = express();

app.set('views','./src/views');
app.set('view engine','ejs');
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('',router);
const DB_URL = 'mongodb://127.0.0.1:27017/menu';
mongoose.connect(DB_URL).then(() => {
    console.log('Connect DB Success');
})

app.listen(3000,() => {
    console.log("Server is running at 3000")
});
