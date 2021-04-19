const candidates = [{
  name: 'Vitoria Roas',
  favoriteColor: 'blue',
  hobby: 'painting',
}, {
  name: 'Jonah Allen',
  favoriteColor: 'blue',
  hobby: 'sleeping',
}, {
  name: 'Kevin Choi',
  favoriteColor: 'blue',
  hobby: 'roller blading',
}, {
  name: 'Adian Perdomo',
  favoriteColor: 'blue',
  hobby: 'cooking',
}, {
  name: 'Jarue Johnson',
  favoriteColor: 'blue',
  hobby: 'making beats'
},
{
  name: 'Cesar Johnson',
  favoriteColor: 'blue',
  hobby: 'making skipping'
}]

exports.getCandidates = (req, res) => {
  res.status(200).json(candidates) // or
  /*  this does not align with rest principle but it's okay
  response.status(200).send({
    status: 200,
    data: candidates,
    message: 'Query returned successful'
  })
  */
}

// exports.getSingleCandidate = (req, res) => {
//   console.log({ params: req.params })
//   const { candidateId } = req.params
//   console.log({candidateId})
//   res.status(200).json(candidates[candidateId]) // or
//   /*  this does not align with rest principle but it's okay
//   response.status(200).send({
//     status: 200,
//     data: candidates,
//     message: 'Query returned successful'
//   })
//   */
// }

exports.getSingleCandidate = (req, res) => {
  const { favoriteColor } = req.params
  res.status(200).json(candidates.filter(candidate => candidate.favoriteColor === favoriteColor)) // or
  /*  this does not align with rest principle but it's okay
  response.status(200).send({
    status: 200,
    data: candidates,
    message: 'Query returned successful'
  })
  */
}