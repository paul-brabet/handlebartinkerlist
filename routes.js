const express = require('express')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  res.redirect('/tinkerlist')
})

router.get('/tinkerlist', (req, res) => {
  res.render('./partials/index')
})
