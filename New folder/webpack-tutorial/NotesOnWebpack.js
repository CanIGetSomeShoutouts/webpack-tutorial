/*

Step 1:  Initialize package.json and install --save-dev  webpack && webpack-cli

Step 2:  Go inside package.json and add "build" script to include "webpack"

Step 3:  Add a ./src/index.js for the entry point.  Webpack 4.0 uses ./src/index.js as the default entry point

Step 4:  Define a --mode development || --mode production to define how the file is to be used on output

Step 5:  Change entry point || output location by adding on file location or --output file location

Step 6:  Install --save-dev babel-core, babel-loader and babel-preset-env

Step 7:  Create a .babelrc folder and add an object with "preset": ["env"]

*Important Note*: While webpack 4.0 is a zero config addition, it only means zero config in 
relation to the entry point, output location, and production/development mode having defaults.

Step 8:  Create a webpack.config.js file and export an object with:

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };

Step 9:  Test it by including ES6 inside ./src/index.js and see it transpiled to ES5 in the output file

*Important Note*:  Another way to transpile or load it is by including --module-bind js=babel-loader 
inside your package.json "build" or "dev" scripts.  Not as recommended, but possible.

Step 11:  Install --save-dev react react-dom babel-preset-react and add "react" to the .babelrc "presets" array

*Important Note*:  You can set up babel to load jsx files by putting /\.(js/jsx)$/ in the "test" property.

Step 12:  Create a reactDOM.render() and react render component and export it to the entry point
OR just have the reactDOM.render() sit at your index.js point instead

Step 13:  Install -save-dev html-webpack-plugin html-loader

Step 14:  Adjust webpack.config.js to include the new installations:

const HtmlWebPackPlugin = require("html-webpack-plugin");

{
...
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }

...

      plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]

}

Step 15:  Create the html file in ./src that will load the react component.  *NOTE*: The bundle.js/main.js
doesn't need to be included as a script tag because the bundler does it for us and outputs it in ./dist/index.html.

Step 16: Now that our page loads react and html, we need it to load CSS.  Install --save-dev css-loader mini-css-extract-plugin

Step 17: Similar to the HTML loader, we must now configure our webpack.config.js file to include the css-loader and extractor:


const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};


*SIDENOTE*: Webpack 3.0 used extract-text-webpack-plugin.  Webpack 4.0 uses the mini-css-extract-plugin instead.

Step 18:  Import your .css file into your react application and npm run build again.

Step 19:  Setting up the dev webpack environment for your application.  Install --save-dev webpack-dev-server and add 
"webpack-dev-server --mode development --open" to a package.json script of your choice.

Step 20:  npm run [script-name] and test code.

Step 21:  Unrelated note, but since we have so many modules and files, we might at this point want to include a .gitignore file.  Put
/node_modules and .env in there.

*/