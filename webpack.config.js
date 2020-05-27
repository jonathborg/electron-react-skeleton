const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const electronConfig = {
    entry: './main.ts',
    target: 'electron-main',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
    },
};

const reactConfig = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                            '@babel/preset-react',
                        ],
                        plugins: [
                            '@babel/proposal-class-properties',
                            '@babel/proposal-object-rest-spread',
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        }),
    ],
};

module.exports = [ electronConfig, reactConfig ];
