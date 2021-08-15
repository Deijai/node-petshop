import express, {Response, Request} from "express";
import routes from './routes/router.routes';
import path from "path";
import mustache from "mustache-express";
import dotenv from 'dotenv';

dotenv.config();

//server
const app = express();

//config mustache
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true}));

//rotas
app.use(routes);


//404
app.use((request: Request, response: Response) => {
    response.send('404 - Not Found');
});

app.listen(process.env.PORT, ()=> {
    console.log('App listening on port', process.env.PORT);
});