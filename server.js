const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

const loginRoutes = require('./server/routes/loginUser')
const registerRoutes = require('./server/routes/registerUser')

require("dotenv").config();
require('./server/config/mongoose.config')
const { stockRouter } = require('./server/routes/stocks.routes');

app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}))
app.use('/api/stocks', stockRouter)


app.use("/register", registerRoutes);
app.use("/login", loginRoutes);

app.listen(port, () => console.log(`Listening on port: ${port}`) );