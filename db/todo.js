'use strict'
module.exports = (db, Sequelize) => {

    const todo = db.define('todo', {
        reference: Sequelize.STRING,
        owner_id: Sequelize.INTEGER,
        account_name: Sequelize.STRING,
        content: Sequelize.STRING
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return todo;
};
