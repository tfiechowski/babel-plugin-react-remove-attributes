export default function JSXAttribute(path, state) {
  const { types } = state;

  const attributes = state.opts.attributes || ["data-test-id"];

  path.traverse({
    JSXIdentifier(_path) {
      if (attributes.indexOf(_path.node.name) > -1) {
        _path.parentPath.remove();
      }
    }
  });
}
