module.exports = {
    friendlyName: 'Generate resource',

    description: 'Generate a repository and a service for a model',

    inputs: {
        name: {
            description: 'The name of the resource (e.g. user)',
            example: 'user',
            required: true
        }
    },

    fn: async function (inputs, exits) {
        const _ = require('lodash');
        const path = require('path');

        const name = _.kebabCase(inputs.name);
        const capitalized = _.upperFirst(_.camelCase(inputs.name));

        await this.helpers.template.generate({
            templateDir: path.resolve(__dirname, 'templates'),
            targetDir: path.resolve('api'),
            data: {
                name: capitalized,
                nameLower: inputs.name.toLowerCase()
            }
        });

        return exits.success();
    }
};
