const autoprefixer = require('autoprefixer');
const px2rem = require('postcss-pxtorem');

module.exports = {
  // Necessary for external CSS imports to work
  // https://github.com/facebookincubator/create-react-app/issues/2677
  ident: 'postcss',
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9' // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009'
    }),
    (opts) => {
      if (/antd\-mobile/.test(opts.source.input.file)) {
        return px2rem({ rootValue: 37.5, propList: ['*'], minPixelValue: 2 })(opts);
      }
      return px2rem({ rootValue: 75, propList: ['*'], minPixelValue: 2 })(opts);
    }
  ]
}
