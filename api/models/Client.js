/**
 * Blitz.js
 *
 * @description :: Blitz table with fields
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    options: {
        tableName: 'PSA_client',
        classMethods: {},
        instanceMethods: {},
        hooks: {afterSync: seed}

    },
    attributes: {
        clientId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: Sequelize.STRING(50),
        },
        Email: {
            type: Sequelize.STRING,
        },
        Phone: {
            type: Sequelize.BIGINT,
        },
        City: {
            type: Sequelize.STRING,
        },
        Area: {
            type: Sequelize.STRING,
        },
        Address: {
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
        const data = require('../../data/client');

        _.forEach(data, function(row) {
            Client.create(row);
        });

        next();
    } else {
        return next()
    }
}
