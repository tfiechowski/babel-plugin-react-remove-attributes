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
