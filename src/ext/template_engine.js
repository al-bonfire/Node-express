function init_template_engine(app) {
    app.set('views', './src/views');
    app.set('view engine', 'ejs'); 
}

module.exports = {
    init_template_engine: init_template_engine
}