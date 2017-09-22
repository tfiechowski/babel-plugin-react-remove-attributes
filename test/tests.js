import { createTest, runTests } from "./utils";

const simpleTests = [
  createTest("simple/single", "Single component"),
  createTest("simple/single", "Pass data-test-id in options", ["data-test-id"]),
  createTest("simple/array", "Support arrays")
];

const nestedTests = [
  createTest("nested/two", "Parent and child component"),
  createTest("nested/array", "Parent and array of child components"),

]

runTests('Simple components', simpleTests);
runTests('Nested components', nestedTests);
