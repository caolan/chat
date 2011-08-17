/**
 * Show functions to be exported from the design doc.
 */

var templates = require('kanso/templates');


exports.dashboard = function (doc, req) {
    return {
        title: 'Huddle',
        content: templates.render('dashboard.html', req, {})
    };
};

exports.not_found = function (doc, req) {
    return {
        title: '404 - Not Found',
        content: templates.render('404.html', req, {})
    };
};
