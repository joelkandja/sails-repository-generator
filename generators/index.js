module.exports = {

    /**
     * Custom generator for sails
     */
    friendlyName: 'Generate Repository + Service',

    description: 'Generate Repository and Service files',

    inputs: {
        name: {
            description: 'The name of the resource',
            required: true,
            type: 'string'
        }
    },

    fn: async function (inputs, exits) {
        const { name } = inputs;
        const _ = require('lodash');
        const fs = require('fs');
        const path = require('path');

        const resourceName = _.upperFirst(_.camelCase(name));

        const basePath = path.resolve('api');
        const repoPath = path.join(basePath, 'repositories');
        const servicePath = path.join(basePath, 'services');

        if (!fs.existsSync(repoPath)) fs.mkdirSync(repoPath);
        if (!fs.existsSync(servicePath)) fs.mkdirSync(servicePath);

        const templateRepo = fs.readFileSync(path.join(__dirname, 'templates/Repository.js'), 'utf8');
        const templateService = fs.readFileSync(path.join(__dirname, 'templates/Service.js'), 'utf8');

        fs.writeFileSync(path.join(repoPath, `${resourceName}Repository.js`), templateRepo.replace(/<%= name %>/g, resourceName));
        fs.writeFileSync(path.join(servicePath, `${resourceName}Service.js`), templateService.replace(/<%= name %>/g, resourceName));

        sails.log.info(`✔️ ${resourceName}Repository & ${resourceName}Service generated.`);
        return exits.success();
    }
};
