import express, {Request, Response} from 'express';
const app = express();
import router from './routers/router'

app.set('views','./src/views');
app.set('view engine','ejs');
app.use(express.static('./public'));
app.use('',router)

app.listen(3000,() => {
    console.log("Server is running at 3000")
});
