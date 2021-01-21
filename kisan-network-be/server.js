const express = require('express');
const cors = require('cors')

const app = express()
// require('./db')()


const contactRoutes = require('./routes/contactRoutes')

const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

app.use(contactRoutes)

app.get('/', (req, res) => {
    res.json('hello');
});

app.listen(PORT, () => {
    console.log('Server started')
})
