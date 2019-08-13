const Sequalize = require('sequelize')
const db = new Sequalize('shopping', 'shopper', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
});
const User = db.define('users', {
    id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequalize.STRING,
        allowNULL: false,
    }
})
const Product = db.define('products', {
    id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequalize.STRING,
        allowNULL: false
    },
    manufacturer: Sequalize.STRING,
    price: {
        type: Sequalize.FLOAT,
        allowNULL: false,
        defaultValue: 0.0
    }
})

exports = module.exports = {
    User,
    Product
}