const express = require('express')

const router = express.Router()
let arreglo = require('../../marvel.json')


router.get("/", (req, res) =>{
    res.render('index', { data: arreglo["Marvel Cinematic Universe"] })
})

router.delete("/delete/:id", (req, res) => {
    const movieId = parseInt(req.params.id)
    let index = -1
    console.log(arreglo["Marvel Cinematic Universe"])
    for (let i = 0; i < arreglo["Marvel Cinematic Universe"].length; i++) {
      if (arreglo["Marvel Cinematic Universe"][i].movie_id === movieId) {
        index = i
        break
      }
    }
  
    if (index !== -1) {
      arreglo["Marvel Cinematic Universe"].splice(index, 1)
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
})
  

module.exports = router