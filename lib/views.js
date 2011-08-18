/**
 * Views to be exported from the design doc.
 */

exports.events_by_room = {
    map: function (doc) {
        if (doc.type === 'message') {
            emit([doc.room, doc.time], null);
        }
    }
};
