export default function JSXAttribute(path, state) {
  const { types } = state;

  const properties = state.opts.properties || ["data-test-id"];

  path.traverse({
    JSXIdentifier(_path) {
      if (properties.indexOf(_path.node.name) > -1) {
        _path.parentPath.remove();
      }
    }
  });
}
