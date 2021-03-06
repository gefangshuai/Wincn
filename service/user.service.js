var utils = require('utility');

var User = require('../model/user.model');

module.exports = {
    findUserByUsername: function (username, callback) {
        User.findOne({username: username}).exec(callback);
    },
    findUserByEmail: function (email, callback) {
        User.findOne({email: email}).exec(callback);
    },
    registerUser: function (user, callback) {
        user.password = utils.md5(user.password, 'base64');
        User.create(user, callback);
    },
    validatePassword: function (password, confirm_password) {
        return utils.md5(password, 'base64') == confirm_password;
    },
    findAll: function (params, callback) {
        User.find(params).exec(callback);
    },
    findById: function (id, callback) {
        User.findById(id, callback);
    },
    findByFavoriteArticle: function (articleId, callback) {
        User.find({favorites: articleId}).exec(callback);
    },
    deleteById: function (id, callback) {
        User.remove({_id: id}, callback);
    },
    updateById: function (id, params, callback) {
        User.update({_id: id}, params, callback);
    }
};