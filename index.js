const express = require('express')
const { getCandidates, getSingleCandidate, getSingleCandidateId, getSortedCandidatesByFirstName, getCandidateHobbies, candidateWithLetterJ } = require('./src/candidates')
const port = 3000

const app = express() // created an express app!

app.get('/candidates/letterj', candidateWithLetterJ)
app.get('/candidates/:candidateHobby', getCandidateHobbies)
app.get('/candidates/fsorted', getSortedCandidatesByFirstName)
app.get('/candidates/:idProperty', getSingleCandidateId)
app.get('/candidates/color/:faveColor', getSingleCandidate) // added a 2nd route
app.get('/candidates', getCandidates) // added a route

app.listen(port, console.log('listenin at http://localhost:' + port))