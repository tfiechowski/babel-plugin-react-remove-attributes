import pluginTester from "babel-plugin-tester";

import reactRemoveAttributesPlugin from "../src";
import { createTest } from "./utils";

const tests = [createTest("single", "Single component")];

pluginTester({
  plugin: reactRemoveAttributesPlugin,
  pluginName: "babel-plugin-react-remove-attributes",
  filename: __filename,
  babelOptions: {
    plugins: ["babel-plugin-syntax-jsx"]
  },
  snapshot: false,
  tests
});
