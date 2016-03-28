# JigSass Generic Normalize
[![NPM version][npm-image]][npm-url]  [![Dependency Status][daviddm-image]][daviddm-url]   

 > Modular, configurable, opt-in browser normalization

## Installation

Using npm:

```sh
npm i -S jigsass-generic-normalize
```

## Usage
```scss
  @import 'path/to/jigsass-generic-normalize'/scss/index;
```

Documentation covering the Sass functionality of `jigsass-generic-normalize` 
is located in The `sassdoc` directory. 

Documentation covering the css provided by `jigsass-generic-normalize` is located in
the `styleguide` directory.

## Development

It is a best practice for JigSass modules to *not* automatically generate css on `@import`, but 
rather have to user explicitly enable the generation of specific styles from the module.

Contributions in the form of pull-requests, issues, bug reports, etc. are welcome.
Please feel free to fork, hack or modify JigSass Generic Normalize in any way you see fit.

#### Writing documentation

Good documentation is crucial for scalability and maintainability. When contributing,
please do make sure that all Sass functionality (functions, mixins, 
variables and placeholder selectors) is well documented.

Documentation is auto-generated using [SassDoc](http://sassdoc.com/)

#### Running tests
`gulp lint` will, well, lint the contents scss files in the `scss` directory.

`gulp test` with run module's test using Mocha and Sassaby.

`gulp tdd` will watch both the Sass files and the test specs for changes, and will
run tests automatically upon them.

#### Writing tests

JigSass Generic Normalize tests are written using [Sassaby](https://github.com/ryanbahniuk/sassaby)
and Mocha. Spec files are located in the `test` directory.

Mocha allows us to place a call to `before()` in the root of any test file and it 
will be run once, before all the other tests in every `test_*.js` file. 
We can also `require()` files and assign them to the global object to make them 
available to all `test_*.js` files. 

jigsass-generic-normalize uses a file called `helper.js` can be used to set up mocha 
globals requires and `before()`.

In addition to Sassaby's testing functions, jigsass-generic-normalize makes a few Sass
functions available to the test suite, for use inside Sassaby tests:

<dl>
  <dt>jig-var-equals($value, $var) -> {boolean}<dt>
  <dd>
		Check if a variable equals a value.<br />
		<strong>$value</strong> {*}: A value to compare the value of $var to.<br />
		<strong>$var</strong> {*}: The variable to test<br />
	</dd>
  <dt>jig-var-type-is($type, $var) -> {boolean}<dt>
  <dd>
		Check if a variable is of a certain type.<br />
		<strong>$type</strong> {string}: A type to compare with the type of $var.<br />
		<strong>$var</strong> {*}: The variable to test<br />
	</dd>
  <dt>jig-map-key-equals($value, $map, $keys...) -> {boolean}<dt>
  <dd>
		Check if a map's key is assigned a cerain value.<br />
		<strong>$value</strong> {*}:  A value to compare the value of a key in $map with.<br />
		<strong>$map</strong> {map}: The map to test.<br />
		<strong>$keys... </strong> {arglist}: A recursive chain of keys.<br />
	</dd>
  <dt>jig-map-key-type-is($type, $map, keys...) -> {boolean}<dt>
  <dd>
		Check if a map's key is of a certain type<br />
		<strong>$type</strong> {string}: A type to compare with the type of $var.<br />
		<strong>$map</strong> {map}: The map to test.<br />
		<strong>$keys... </strong> {arglist}: A recursive chain of keys.<br />
	</dd>
</dl>


## File structure
```bash
┬ ./
│
├─┬ scss/ 
│ └─ index.scss # The module's importable file.
│
├── sassdoc/    # Generated documentation 
│               # of the module's sass features
│
└─┬─ test/
  │
  ├─┬ helpers/
  │ │
  │ ├── importer.scss       # Used for easilty importing tested scss files
  │ │
  │ └── _test_helpers.scss  # JigSass's assertion helpers,
  │                         # for use inside Sassaby tests.
  │                         
  ├── helper.js              # Used for defining global `before()`
  │                          # functions and requiring modules.
  │                         
  └── test_jigsass-generic-normalize  # Specs. Mocha will automatically 
                             # run all javascript files located
                             # in the `test` directory.
```

**License:** MIT



[npm-image]: https://badge.fury.io/js/jigsass-generic-normalize.svg
[npm-url]: https://npmjs.org/package/jigsass-generic-normalize

[daviddm-image]: https://david-dm.org/TxHawks/jigsass-generic-normalize.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/TxHawks/jigsass-generic-normalize
