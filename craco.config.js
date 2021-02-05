const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@body-background': '#181826',
                            '@primary-color': '#E25822'
                        },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
};
