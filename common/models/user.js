'use strict';

module.exports = function(User) {
    User.greet = function(username, cb) {
        cb(null, '<div>Greetings... ' + username + '</div>');
    };

    User.remoteMethod('greet', {
        accepts: {arg: 'username', type: 'string'},
        returns: {arg: 'responseText', type: 'string'}
    });

    User.thanks = function(username, cb) {
        cb(null, '<div>Thank you ' + username + '</div>');
    };

    User.remoteMethod('thanks', {
        accepts: {arg: 'username', type: 'string'},
        returns: {arg: 'responseText', type: 'string'}
    });
};
