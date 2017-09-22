import babelPluginSyntaxJSX from 'babel-plugin-syntax-jsx';
import attributeVisitor from './jsx-attribute-visitor';

export default function() {
  return {
    pre() {
      if (!Array.isArray(this.opts)) {
        this.opts = ['data-test-id'];
      }
    },
    inherits: babelPluginSyntaxJSX,
    visitor: { JSXIdentifier: attributeVisitor },
  };
}
