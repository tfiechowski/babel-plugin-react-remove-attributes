import babelPluginSyntaxJSX from 'babel-plugin-syntax-jsx';
import attributeVisitor from './jsx-attribute-visitor';
import { isEqual } from 'lodash';

export default function() {
  return {
    pre() {
      if (!this.opts || isEqual(this.opts, {})) {
        this.opts = ['data-test-id'];
      } else {
        this.opts = Array.isArray(this.opts) ? this.opts : [this.opts];
      }
    },
    inherits: babelPluginSyntaxJSX,
    visitor: { JSXIdentifier: attributeVisitor },
  };
}
