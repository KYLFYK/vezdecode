module.exports = {
  //mode: "production",
  mode: 'development',
  devtool: 'inline-source-map',

  entry: ['./src/index.tsx' /*main*/],
  output: {
    filename: './bundle.js', // in /dist
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
