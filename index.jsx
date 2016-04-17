
exports.install = function (Vue) {
    var definition = require('./component')

    Vue.component('Button', definition)
}