/**
 * Kanso document types to export
 */

var fields = require('kanso/fields'),
    permissions = require('kanso/permissions'),
    Type = require('kanso/types').Type;


exports.message = new Type('message', {
    permissions: {
        add: permissions.loggedIn(),
        update: function () {
            throw new Error('Cannot update existing message');
        },
        remove: permissions.hasRole('_admin')
    },
    fields: {
        time: fields.createdTime(),
        author: fields.creator(),
        text: fields.string(),
        room: fields.string()
    }
});
