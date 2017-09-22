export const createTest = (name, title) => {
  const fixture = `fixtures/${name}/actual.js`;
  const outputFixture = `fixtures/${name}/expected.js`;

  return {
    title,
    fixture,
    outputFixture
  };
};
