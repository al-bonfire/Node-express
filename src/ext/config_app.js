const express = require('express')

function config_app(app) {
    // Configurar a pasta dos estáticos
    app.use(express.static('./src/static'))
}

module.exports = {
    config_app: config_app
}