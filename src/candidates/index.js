const candidates = [{
  id: 'xyz1',
  name: 'Vitoria Roas',
  favoriteColor: 'blue',
  hobby: 'painting',
}, {
  id: 'xyz2',
  name: 'Jonah Allen',
  favoriteColor: 'blue',
  hobby: 'sleeping',
}, {
  id: 'xyz3',
  name: 'Kevin Choi',
  favoriteColor: 'blue',
  hobby: 'roller blading',
}, {
  id: 'xyz4',
  name: 'Adian Perdomo',
  favoriteColor: 'blue',
  hobby: 'cooking',
}, {
  id: 'xyz5',
  name: 'Jarue Johnson',
  favoriteColor: 'blue',
  hobby: 'making beats'
},
{
  id: 'xyz6',
  name: 'Cesar Johnson',
  favoriteColor: 'red',
  hobby: 'making skipping'
}]

// exports.getCandidates = (req, res) => {
//   const { candidateId } = request.params
//   if(candidateId < 0 || candidateId >= candidates.length) {
//    response.status(403).send()
//
//   }
// }

exports.getCandidates = (req, res) => {
  res.status(200).json(candidates)
}

// exports.getSingleCandidate = (req, res) => {
//   console.log({ params: req.params })
//   const { candidateId } = req.params
//   console.log({candidateId})
//   res.status(200).json(candidates[candidateId])
// }

exports.getSortedCandidatesByFirstName = (req, res) => {
  res.status(200).json(candidates.sort((current, next) => {    
    const currentName = current.name.toLowerCase() 
    const nextName = next.name.toLowerCase()
    if (currentName < nextName) //sort string ascending
      return -1
    if (currentName > nextName)
      return 1
    return 0 //default return value (no sorting)
  })
  )
}

exports.getSingleCandidateId = (req, res) => {
  const { idProperty } = req.params
  res.status(200).json(candidates.sort(candidate => candidate.id === idProperty)) // or
  /*  this does not align with rest principle but it's okay
  response.status(200).send({
    status: 200,
    data: candidates,
    message: 'Query returned successful'
  })
  */
}

exports.getSingleCandidate = (req, res) => {
  const { faveColor } = req.params
  res.status(200).json(candidates.filter(candidate => candidate.favoriteColor === faveColor))
}

exports.getCandidateHobbies = (req, res) => {
  const { candidateHobby } = req.params
  res.status(200).json(candidates.filter(candidate => candidate.hobby === candidateHobby))
}

exports.candidateWithLetterJ = (req, res) => {
  // const { hasLetterJ } = req.params
  const hasLetterJ = 'J' 
  res.status(200).json(candidates.filter((candidate) => candidate.name.includes(hasLetterJ)))
}




