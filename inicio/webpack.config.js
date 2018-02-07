var path = require('path');
 
module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015', 'stage-0'] }
                }],
            },            
 
        ]
    }
};