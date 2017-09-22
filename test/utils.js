import pluginTester from "babel-plugin-tester";

import reactRemoveAttributesPlugin from "../src";

export const createTest = (name, title, options) => {
  const fixture = `fixtures/${name}/actual.js`;
  const outputFixture = `fixtures/${name}/expected.js`;

  const test = {
    title,
    fixture,
    outputFixture
  };

  if (options) {
    test["pluginOptions"] = { attributes: options };
  }

  return test;
};

export const runTests = (title, tests, options) => {
  const params = {
    plugin: reactRemoveAttributesPlugin,
    pluginName: title,
    filename: __filename,
    babelOptions: {
      plugins: ["babel-plugin-syntax-jsx"]
    },
    snapshot: false,
    tests
  };

  if (options) {
    params = Object.assign({}, params, options);
  }

  pluginTester(params);
};
