/**
 * Blitz.js
 *
 * @description :: Blitz table with fields
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    options: {
        tableName: 'PSA_category',
        classMethods: {},
        instanceMethods: {},
        hooks: { }

    },
    attributes: {
        categoryId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(50),
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
        const data = require('../../data/category');
        _.forEach(data, function(row) {
            Category.create(row);
        });
        next();
    } else {
        return next()
    }
}
