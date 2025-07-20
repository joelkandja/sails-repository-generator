/**
 * <%= name %>Repository
 * @description Repository for <%= name %> model
 */
module.exports = {
    async findAll() {
        return await <%= name %>.find();
    },

    async findById(id) {
        return await <%= name %>.findOne({ id });
    },

    async create(data) {
        return await <%= name %>.create(data).fetch();
    },

    async update(id, data) {
        return await <%= name %>.updateOne({ id }).set(data);
    },

    async delete(id) {
        return await <%= name %>.destroyOne({ id });
    }
};
