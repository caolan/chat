/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_show/room', query: {room: 'Testing'}},
    {from: '*', to: '_show/not_found'}
];
