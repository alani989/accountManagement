'use strict'
module.exports = (db, Sequelize) => {

    const users = db.define('users', {
        email: Sequelize.STRING,
        password: Sequelize.STRING,
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return users;
};
