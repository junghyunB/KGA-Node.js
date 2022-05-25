const path = require("path")

module.exports = {
    entry: { // 번들링 할 파일 내용 혹은 
        app: "./src/a.ts"
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: '/node_modules/'
        }]
    },
    output: {
        filename: 'server.js',
        path: path.join(__dirname, "app")
    }
}