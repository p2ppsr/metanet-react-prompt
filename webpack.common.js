const path = require('path');

module.exports = {
  // Define the entry point of your library
  entry: './src/index.ts', // Adjust this path to your library's entry point

  // Adjust output configuration for a library
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'metanet-react-prompt.js',
    library: 'MetaNet-React-Prompt', // This is the name your library will be available as in global scope for UMD bundles
    libraryTarget: 'umd', // This will make your library available for CommonJS, AMD, and as a global variable
    publicPath: '/',
    umdNamedDefine: true,
    globalObject: 'this', // This ensures compatibility with both browser and Node.js environments
  },

  // Mark React and other common dependencies as external
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
    // You can add more externals here depending on your library's dependencies
  },

  module: {
    rules: [
      // TypeScript and JavaScript loaders
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      // Style loaders (You might want to consider if these are necessary for your library)
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // Asset loaders
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: false }
        }
      }
    ]
  },

  // Resolve extensions
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  // Adjust or remove plugins that are not relevant for a library
  plugins: [
    // Example: You might not need HtmlWebpackPlugin for a library
  ],

  // Optimization options, such as minimizing the output
  optimization: {
    minimize: true, // Consider enabling or configuring minimization to reduce the bundle size
    // Other optimization options...
  },
};
