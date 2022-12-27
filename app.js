const { create_app } = require('./src/main.js')

app = create_app()

app.listen(
    Number(process.env.EXPRESS_PORT), () => {
    console.log("Listening on port 5000...")
})
