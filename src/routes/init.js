const user = require('./user')

function init_routes(app) {
    app.use('', user.router)
}

module.exports = {
    init_routes: init_routes
}