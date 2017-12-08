import babelPluginSyntaxJSX from 'babel-plugin-syntax-jsx';
import attributeVisitor from './jsx-attribute-visitor';

export default function({ types }) {
  return {
    pre() {
      this.types = types;

      if (!this.opts.ids) {
        this.opts.ids = ['data-test-id'];
      }

      if (!Array.isArray(this.opts.ids)) {
        this.opts.ids = [this.opts.ids];
      }
    },
    inherits: babelPluginSyntaxJSX,
    visitor: {
      JSXAttribute: attributeVisitor,
    },
  };
}
