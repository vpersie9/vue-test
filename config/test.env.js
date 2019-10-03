'use strict';
const merge = require('webpack-merge');
const devEnv = require('./dev.env');

module.exports = merge(devEnv, {
    NODE_ENV: '"testing"',
    BASE_URL:'"http://114.116.156.50:8080/"'
});
