import pluginTester from 'babel-plugin-tester';
import prettier from 'prettier-eslint';

const eslintConfig = require('../.eslintrc');

export const formatSource = source => {
  const options = {
    text: source,
    eslintConfig,
  };

  return prettier(options).trim();
};

import reactRemoveAttributesPlugin from '../src';

export const createTest = (name, title, options) => {
  const fixture = `fixtures/${name}/actual.js`;
  const outputFixture = `fixtures/${name}/expected.js`;

  const test = {
    title,
    fixture,
    outputFixture,
  };

  if (options) {
    test['pluginOptions'] = { attributes: options };
  }

  return test;
};

export const runTests = (title, tests, options) => {
  let params = {
    plugin: reactRemoveAttributesPlugin,
    pluginName: title,
    filename: __filename,
    babelOptions: {
      plugins: ['babel-plugin-syntax-jsx'],
      babelrc: false,
    },
    snapshot: false,
    tests,
    formatResult: formatSource,
  };

  if (options) {
    params = Object.assign({}, params, options);
  }

  pluginTester(params);
};
