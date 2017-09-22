import JSXAttribute from './jsx-attribute-visitor';
import babelPluginSyntaxJSX from 'babel-plugin-syntax-jsx';

export default function() {
  return {
    inherits: babelPluginSyntaxJSX,
    visitor: {
      JSXAttribute,
    },
  };
}
