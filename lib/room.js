var db = require('kanso/db'),
    types = require('./types');


exports.initRoom = function (info, req, res) {
    exports.bindChatBox(req);
    exports.listenChanges(req);
};

exports.bindChatBox = function (req) {
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
};

exports.listenChanges = function (req) {
    db.changes({include_docs: true}, function (err, data) {
        if (err) {
            alert(err);
            // stop listening
            return false;
        }
        data.results.forEach(function (r) {
            $('#messages').append(
                '<li>' + r.doc.time + ' &lt;' + r.doc.author + '&gt; - ' +
                r.doc.text + '</li>'
            );
        });
    });
};
