const user = require('./user')

function init_routes(app) {
    app.use('/node', user.router)
}

module.exports = {
    init_routes: init_routes
}