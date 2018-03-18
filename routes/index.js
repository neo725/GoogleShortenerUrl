'use stricts';

module.exports = function (app) {
    let controller = require('../controllers')

    app.route('/').get(controller.hello)

    app.route('/gurl').post(controller.gurl)
}