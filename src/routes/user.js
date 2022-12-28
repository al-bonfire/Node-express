const express = require('express')
const router = express.Router()
const { home, signin } = require('./controller.js')
const { urlencodedParser, jsonParser } = require('./middlewares.js')


router.all("/", home)
router.all("/signin/", urlencodedParser, signin)

module.exports = {
    router: router
}
