import { createTest, runTests } from "./utils";

const simpleTests = [
  createTest("simple/single", "Single component"),
  createTest("simple/single", "Pass data-test-id in options", ["data-test-id"]),
  createTest("simple/array", "Support arrays")
];

runTests('Simple tests', simpleTests);
