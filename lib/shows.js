/**
 * Show functions to be exported from the design doc.
 */

var templates = require('kanso/templates');


exports.room = function (doc, req) {
    return {
        title: req.query.room,
        content: templates.render('room.html', req, {
            room: req.query.room
        })
    };
};

exports.not_found = function (doc, req) {
    return {
        title: '404 - Not Found',
        content: templates.render('404.html', req, {})
    };
};
