# babel-plugin-react-remove-attributes

[![npm version](https://badge.fury.io/js/babel-plugin-react-remove-attributes.svg)](https://badge.fury.io/js/babel-plugin-react-remove-attributes)
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

By default, `data-test-id` is removed.

It's possible to pass attributes that we want to remove in several ways:

| Input type | example |
|---|---|
| string | `data-test-something` |
| array of strings | `['data-test-one', 'data-test-two']` |
| regular expression | `/data-test-*/` |
| array of regular expressions | `[/data-test-*/, /data-details-*/]` |

## TODO:
 - Replace lodash isEqual check