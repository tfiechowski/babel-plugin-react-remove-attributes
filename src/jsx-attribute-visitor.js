export default (path, state) => {
  const attributes = state.opts;

  if (attributes.includes(path.node.name)) {
    path.parentPath.remove();
  }
};
