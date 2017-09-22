import JSXAttribute from './jsx-attribute-visitor';

export default function({ types }) {
  return {
    inherits: babelPluginSyntaxJSX,
    visitor: {
      JSXAttribute
    }
  };
}
