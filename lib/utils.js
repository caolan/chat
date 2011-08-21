exports.zeroPad = function (str, len) {
    str = '' + str;
    while (str.length < len) {
        str = '0' + str;
    }
    return str;
};

exports.formatTime = function (timestamp) {
    var t = new Date(timestamp);
    var hh = exports.zeroPad(t.getHours(), 2);
    var mm = exports.zeroPad(t.getMinutes(), 2);
    return hh + ':' + mm;
};
