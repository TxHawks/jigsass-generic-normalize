# JigSass Generic Normalize
[![NPM version][npm-image]][npm-url]  [![Dependency Status][daviddm-image]][daviddm-url]   

 > Modular, configurable, opt-in browser normalization


JigSass Normalize is a modularized and configurable version of Nicolas Gallagher and
Jonathan Neal's [normalize.css](http://necolas.github.io/normalize.css/) at version 4.0.0.

Normalize.css is a modern alternative to css resets, which preserves useful defaults and corrects
bugs and common browser inconsistencies.

## Installation

Using npm:

```sh
npm i -S jigsass-generic-normalize
```

## Usage

```scss
  @import 'path/to/jigsass-generic-normalize'/scss/index;
```

## Extended details and known issues

Additional detail and explanation of the esoteric parts of normalize.css.

#### `pre, code, kbd, samp`

The `font-family: monospace, monospace` hack fixes the inheritance and scaling
of font-size for preformatted text. The duplication of `monospace` is
intentional. [Source](https://en.wikipedia.org/wiki/User:Davidgothberg/Test59).

#### `sub, sup`

Normally, using `sub` or `sup` affects the line-box height of text in all
browsers. [Source](https://gist.github.com/413930).

#### `svg:not(:root)`

Adding `overflow: hidden` fixes IE9's SVG rendering. Earlier versions of IE
don't support SVG, so we can safely use the `:not()` and `:root` selectors that
modern browsers use in the default UA stylesheets to apply this style. [Source]
(https://lists.w3.org/Archives/Public/public-svg-wg/2008JulSep/0339.html).

#### `select`

By default, Chrome on OS X and Safari on OS X allow very limited styling of
`select`, unless a border property is set. The default font weight on `optgroup`
elements cannot safely be changed in Chrome on OSX and Safari on OS X.

#### `[type="checkbox"]`

It is recommended that you do not style checkbox and radio inputs as Firefox's
implementation does not respect box-sizing, padding, or width.

#### `[type="number"]`

Certain font size values applied to number inputs cause the cursor style of the
decrement button to change from `default` to `text`.

#### `[type="search"]`

The search input is not fully stylable by default. In Chrome and Safari on
OSX/iOS you can't control `font`, `padding`, `border`, or `background`. In
Chrome and Safari on Windows you can't control `border` properly. It will apply
`border-width` but will only show a border color (which cannot be controlled)
for the outer 1px of that border. Applying `-webkit-appearance: textfield`
addresses these issues without removing the benefits of search inputs (e.g.
showing past searches). Safari (but not Chrome) will clip the cancel button on
when it has padding (and `textfield` appearance).




**License:** MIT



[npm-image]: https://badge.fury.io/js/jigsass-generic-normalize.svg
[npm-url]: https://npmjs.org/package/jigsass-generic-normalize

[daviddm-image]: https://david-dm.org/TxHawks/jigsass-generic-normalize.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/TxHawks/jigsass-generic-normalize
