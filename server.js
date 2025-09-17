const express = require('express')
const cors = require('cors')
require('dotenv').config();
const SubscriptionRoute = require('./routes/Subscription')


//Middleware
const app = express()
// Middleware
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true, 
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json())

app.use("/api/signup", SubscriptionRoute)

// Welcome route for Montero landing page
app.get('/', (req, res) => {
    res.send('Welcome Montero Landing page')
})


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`));
