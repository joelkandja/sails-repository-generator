/**
 * <%= name %>Service
 * @description Service layer for <%= name %>
 */
const <%= name %>Repository = require('../repositories/<%= name %>Repository');

module.exports = {
    async getAll() {
        return await <%= name %>Repository.findAll();
    },

    async getOne(id) {
        return await <%= name %>Repository.findById(id);
    },

    async create(input) {
        return await <%= name %>Repository.create(input);
    },

    async update(id, input) {
        return await <%= name %>Repository.update(id, input);
    },

    async delete(id) {
        return await <%= name %>Repository.delete(id);
    }
};
