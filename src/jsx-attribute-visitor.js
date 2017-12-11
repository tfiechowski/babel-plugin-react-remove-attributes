export default (path, state) => {
  const attributes = state.opts || [];

  attributes.forEach(attribute => {
    const removeStringOpt = typeof attribute === 'string' && attribute === path.node.name;
    const removeRegexpOpt = attribute instanceof RegExp && path.node.name.match(attribute);

    if (removeStringOpt || removeRegexpOpt) {
      path.parentPath.remove();
    }
  });
};
