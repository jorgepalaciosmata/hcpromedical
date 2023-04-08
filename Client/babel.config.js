module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      
      'babel-plugin-styled-components',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime',
      [ 
        "module-resolver",
        {
          "root": "./src",
          "alias": {
            "@Src": "./fileSystem/App.jsx",
            "@Components": "./fileSystem/components",
            "@Pages": "./fileSystem/pages",
            "@Elements": "./fileSystem/elements",
            "@Styles": "./fileSystem/assets/styles",
            "@Utils": "./fileSystem/utils",
            "@HOC": "./src/hoc",
            "@Image": "./fileSystem/assets/img",
            "@Reducer": "./fileSystem/reducers",
            "@Action": "./fileSystem/actions"
          }
        }
      ]
    ] ,
  };
};


/*

"plugins": [
    "babel-plugin-styled-components",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
    [
      "module-resolver",
      {
        "root": "./src",
        "alias": {
          "@Src": "./src/App.jsx",
          "@Components": "./src/components",
          "@Pages": "./src/pages",
          "@Elements": "./src/elements",
          "@Styles": "./src/assets/styles",
          "@Utils": "./src/utils",
          "@HOC": "./src/hoc",
          "@Image": "./src/assets/img",
          "@Reducer": "./src/reducers",
          "@Action": "./src/actions"
        }
      }
    ]
  ]

*/