const express = require('express')
const fs = require('fs')

const port = process.env.PORT || 3000
const app = express()
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine({ beautify: true }))

app.get('/', require('./routes').index)

app.get('/all', require('./routes').all)

app.get('/one/:name', require('./routes').one)

app.get('/:rate', require('./routes').bonus)

app.listen(port, () => {
    console.log(`REST API running on port ${port}`)
})