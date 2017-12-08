function matchesId(name, id) {
  if (typeof id === 'string') {
    return name === id;
  }

  // Let's be lazy and assume RegExp

  return id.test(name);
}

export default (path, state) => {
  const { types } = state;
  const { ids } = state.opts;

  if (!types.isJSXIdentifier(path.node.name)) {
    return;
  }

  const name = path.get('name');
  const actualName = name.node.name;

  for (const id of ids) {
    if (matchesId(actualName, id)) {
      path.remove();
      return;
    }
  }
};
