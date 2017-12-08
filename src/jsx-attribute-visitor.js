export default (path, state) => {
  const { types } = state;
  const { ids } = state.opts;

  if (!types.isJSXIdentifier(path.node.name)) {
    return;
  }

  const name = path.get('name');
  const actualName = name.node.name;

  if (ids.includes(actualName)) {
    path.remove();
  }
};
