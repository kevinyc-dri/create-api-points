const express = require('express')
const { getCandidates, getSingleCandidate } = require('./src/candidates')
const port = 3000

const app = express() // created an express app!

// app.get('/candidates/:candidateId', getSingleCandidate) // added a 2nd route
app.get('/candidates/:favoriteColor', getSingleCandidate) // added a 2nd route
app.get('/candidates', getCandidates) // added a route

app.listen(port, console.log('listenin at http://localhost:' + port))