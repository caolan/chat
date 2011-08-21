/**
 * Filter functions to be exported from the design doc.
 */

exports.events_by_room = function (doc, req) {
    return doc.room === req.query.room;
};
