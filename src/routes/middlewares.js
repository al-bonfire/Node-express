const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = {
    jsonParser: jsonParser,
    urlencodedParser: urlencodedParser
}