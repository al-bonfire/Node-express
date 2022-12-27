const { create_app } = require('./src/main.js')

app = create_app()

app.listen(5000, () => {
    console.log("Listening on port 5000...")
})