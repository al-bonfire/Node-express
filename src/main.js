const express = require('express')
const { init_template_engine } = require('./ext/template_engine.js')
const { init_routes } = require('./routes/init.js')
const { init_database } = require('./models.js')
const { config_app } = require('./ext/config_app.js')


function create_app() {

    const app = express()

    init_database()
    init_template_engine(app)
    init_routes(app)

    config_app(app)

    return app
}

module.exports = {
    create_app: create_app
}