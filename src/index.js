
import express, { Router } from 'express';
import cors from 'cors'; 
import { sequelize } from './database/connect.js';
import usersRouter from './controllers/users.js';
import reviewsRouter from './controllers/reviews.js';
import countriesRouter from './controllers/countries.js';
import citiesRouter from './controllers/cities.js';
import authRouter from './controllers/authController.js';
import './models/User.js';
import './models/Country.js';
import authenticateToken from './middleware/authMiddleware.js';

const app = express();

app.use(express.json());

try {
    sequelize.authenticate();
    console.log('Db connected');
} catch (error) {
    console.error(error);
}


app.use(cors());




app.get('/', (req, res) => {
    res.json({ message: 'todo ok' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server on in port ${PORT}`);
});

app.use(usersRouter);
app.use(reviewsRouter);
app.use(countriesRouter);
app.use(citiesRouter);
app.use(authRouter);
app.use(authenticateToken);