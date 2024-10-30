const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req,res) => {
    res.send('hello from server!')
})

app.listen(8080, () => {
    console.log('server is listening on port 8080')
})