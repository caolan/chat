/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_list/room/events_by_room', query: {
        room: 'Testing',
        start_key: ['Testing'],
        end_key: ['Testing', {}],
        include_docs: 'true'
    }},
    {from: '*', to: '_show/not_found'}
];
