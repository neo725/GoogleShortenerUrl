'use stricts';

module.exports = (function() {
    let gurl = require('../utils/gshorturl-util')

    return {
        hello: function (req, res) {
            res.json({ message: 'hello world' })
        },
        gurl: function (req, res) {
            let url = req.body.url

            gurl(url, function(short_url) {
                res.json({ url: short_url })
            }, function(error) {
                res.statusCode = 400
                // res.json({ err: error })
                res.json('error')
            })
        }
    }
})()