'use strict'
module.exports = (db, Sequelize) => {

    const orders = db.define('orders', {
        reference: Sequelize.STRING,
        owner_id: Sequelize.INTEGER,
        account_name: Sequelize.STRING,
        ship_to: Sequelize.STRING,
        ship_date: Sequelize.DATE,
        status: Sequelize.STRING
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return orders;
};
