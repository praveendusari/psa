/**
 * Blitz.js
 *
 * @description :: Blitz table with fields
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    options: {
        tableName: 'PSA_feedback',
        classMethods: {},
        instanceMethods: {},
        hooks: {}

    },
    attributes: {
        feedbackId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ClientId: {
            type: Sequelize.INTEGER,
        },
        NextmeetingTime: {
            type: Sequelize.DATE,
        },
        Comments: {
            type: Sequelize.STRING(50),
        },
        Intrested: {
            type: Sequelize.STRING(50),
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
