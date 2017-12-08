import { createTest, runTests } from './utils';

const simpleTests = [
  createTest('simple/single', 'Single component'),
  createTest('simple/single', 'Pass data-test-id in options', ['data-test-id']),
  createTest('simple/array', 'Support arrays'),
];

const nestedTests = [
  createTest('nested/two', 'Parent and child component'),
  createTest('nested/array', 'Parent and array of child components'),
];

const customAttributeTests = [
  createTest('custom_attrs/single', 'Custom data-test-class attribute', { ids: ['data-test-class'] }),
  createTest('custom_attrs/multiple', 'Multiple custom data-test-* attributes', { ids: [
    'data-test-id',
    'data-test-class',
    'data-test-icon',
    'data-test-label',
  ] }),
  createTest(
    'custom_attrs/nested_arrays',
    'Multiple custom data-test-* attributes inside nested arrays',
    { ids: ['data-test-id', 'data-test-class', 'data-test-icon', 'data-test-label', 'data-test-item'] },
  ),
];

runTests('Simple components', simpleTests);
runTests('Nested components', nestedTests);
runTests('Custom attributes', customAttributeTests);
