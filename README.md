# babel-plugin-react-remove-attributes

[![Build Status](https://travis-ci.org/tfiechowski/babel-plugin-react-remove-attributes.svg?branch=master)](https://travis-ci.org/tfiechowski/babel-plugin-react-remove-attributes)

## About

This plugin will remove specified attributes from React components. The default attribute to be removed is `data-test-id`.



This could be useful for removing tags used for testing eg:

```
<Button data-test-id="run_button">Run</Button>
```

will become:

```
<Button>Run</Button>
```

## How to use

## TODO:
 - improve readme