var db = require('kanso/db'),
    templates = require('kanso/templates'),
    types = require('./types'),
    utils = require('./utils');


exports.initRoom = function (info, req, res) {
    exports.bindChatBox(req);
    exports.listenChanges(req);
};

exports.bindChatBox = function (req) {
    $('#chatbox_form').submit(function (ev) {
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
};

exports.listenChanges = function (req) {
    var q = {
        include_docs: true,
        filter: 'chat/events_by_room',
        room: req.query.room
    };
    db.changes(q, function (err, data) {
        if (err) {
            alert(err);
            // stop listening
            return false;
        }
        data.results.forEach(function (r) {
            r.doc.hhmm = utils.formatTime(r.doc.time);
            $('#messages').append(
                templates.render('message.html', req, r.doc)
            );
        });
    });
};
