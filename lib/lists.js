/**
 * List functions to be exported from the design doc.
 */

var templates = require('kanso/templates'),
    events = require('kanso/events'),
    room = require('./room');


exports.room = function (head, req) {
    start({code: 200, headers: {'Content-Type': 'text/html'}});
    var row, rows = [];
    while (row = getRow()) {
        rows.push(row);
    }
    events.once('afterResponse', room.initRoom);
    return {
        title: req.query.room,
        content: templates.render('room.html', req, {
            room: req.query.room,
            rows: rows
        })
    };
};
