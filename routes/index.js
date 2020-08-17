const fetch = require('node-fetch')

let rates
fetch('https://api.ratesapi.io/api/latest')
    .then(res => res.json())
    .then(json => rates = json);

exports.index = (req, res) => {
    res.render('index', { baseUrl: req.baseUrl })
}

exports.all = (req, res) => {
    res.render('all', { rates })
}

exports.one = (req, res) => {
    res.render('one', { rates, name: req.params.name })
}

exports.bonus = (req, res) => {
    res.render('bonus', { rates, rate: req.params.rate, base: req.query.base })
}