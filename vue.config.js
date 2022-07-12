const path = require("path");

function resolve(targetPath) {
    return path.resolve(__dirname, targetPath);
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src"),
                "@components": resolve("src/components"),
            },
        },
    },
    // chainWebpack: config => {
    //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    //   types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    // },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import '~@/stylesheet/variables.scss';`,
            },
        },
    },
};
