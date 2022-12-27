const home = (request, response) => {

    if (request.method === 'POST') {
        console.log('método post')
    }

    response.render('home.ejs', {
        people: [
            {name: 'Antonio', age: 29}
        ]
    })
}

const signin = (request, response) => {

    if (request.method === 'POST') {
        console.log(request.body)
    }

    response.render('signin.ejs')
}

module.exports = {
    home: home,
    signin: signin
}