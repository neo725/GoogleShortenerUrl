module.exports = function (url, cb_success, cb_error) {
    let config = require('../config.json')
    const axios = require('axios')
    //const API_KEY = 'AIzaSyAKv9uYDkLxRejMjzfHIN0Bm4q1zLLYRLo'
    const API_KEY = config.API_KEY

    const g_url = 'https://www.googleapis.com/urlshortener/v1/url'

    let param = {
        longUrl: url
    }

    axios.post(`${g_url}?key=${API_KEY}`, param)
        .then(function(response) {
            if (response.data) {
                //console.log(response.data.id)
                return cb_success(response.data.id)
            }

            cb_success('')
        })
        .catch(function(error) {
            //console.log(error);
            cb_error(error)
        })
}