'use strict'
module.exports = (db, Sequelize) => {

    const accounts = db.define('accounts', {
        reference: Sequelize.STRING,
        owner_id: Sequelize.INTEGER,
        account_name: Sequelize.STRING,
        poc: Sequelize.STRING,
        contact_info: Sequelize.STRING
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return accounts;
};
