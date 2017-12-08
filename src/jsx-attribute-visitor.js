export default (path, state) => {
  const { ids } = state.opts;

  if (ids.includes(path.node.name)) {
    path.parentPath.remove();
  }
};
