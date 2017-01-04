/**
 * Blitz.js
 *
 * @description :: Blitz table with fields
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    options: {
        tableName: 'PSA_admin',
        classMethods: {},
        instanceMethods: {},
        hooks: {  afterSync: seed}
    },
    attributes: {
        adminId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(50),
        },
        month: {
            type: Sequelize.DATE,
        },
        email: {
            type: Sequelize.STRING(50),
        },
        username: {
            type: Sequelize.STRING(50),
        },
        password: {
            type: Sequelize.STRING(50),
        },
        category: {
            type: Sequelize.INTEGER,
        },
        description: {
            type: Sequelize.STRING,
        },
        createdAt: {
            type: Sequelize.DATE,
            field: 'createdAt'
        },
        updatedAt: {
            type: Sequelize.DATE,
            field: 'updatedAt'
        }
    },
};

function seed(name, next) {
    if (sails.config.models.seed) {
        const data = require('../../data/admin');

        _.forEach(data, function(row) {
            Admin.create(row);
        });

        next();
    } else {
        return next()
    }
}
