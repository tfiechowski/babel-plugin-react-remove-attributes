export default function JSXAttribute(path, state) {
  const attributes = state.opts.attributes || ['data-test-id'];

  path.traverse({
    JSXIdentifier(_path) {
      if (attributes.includes(_path.node.name)) {
        _path.parentPath.remove();
      }
    },
  });
}
