/**
 * List functions to be exported from the design doc.
 */

var templates = require('kanso/templates'),
    events = require('kanso/events'),
    db = require('kanso/db'),
    types = require('./types');


exports.room = function (head, req) {
    start({code: 200, headers: {'Content-Type': 'text/html'}});
    var row, rows = [];
    while (row = getRow()) {
        rows.push(row);
    }
    events.once('afterResponse', function () {
        $('#chatbox').submit(function (ev) {
            ev.preventDefault();
            var textarea = $('[name="text"]', this);
            types.message.create(req.userCtx, function (err, msg) {
                msg.text = textarea.val();
                msg.room = req.query.room;
                db.saveDoc(msg, function (err) {
                    if (err) {
                        alert(err);
                    }
                    textarea.val('');
                });
            });
            return false;
        });
    });
    return {
        title: req.query.room,
        content: templates.render('room.html', req, {
            room: req.query.room,
            rows: rows
        })
    };
};
