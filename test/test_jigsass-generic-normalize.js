'use strict';

/* global assert, fs, path, Sassaby,  */

describe('jigsass-generic-normalize', () => {
  const file = path.resolve(__dirname, 'helpers/importer.scss');
  const sassaby = new Sassaby(file);

  describe('jigsass-normalize [Mixin]', () => {
    it('Includes root', () => {
      sassaby.standaloneMixin('jigsass-normalize')
        .calledWithArgs('root')
        .equals(
          "* html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}" +
          "* body{margin:0}"
        );
    });

    it('Includes html5', () => {
      sassaby.standaloneMixin('jigsass-normalize')
        .calledWithArgs('html5')
        .equals(
          "* article,* aside,* details,* figcaption,* figure,* footer,* header,* main,* menu,* nav,* section,* summary{display:block}" +
          "* audio,* canvas,* progress,* video{display:inline-block}" +
          "* audio:not([controls]){display:none;height:0}" +
          "* progress{vertical-align:baseline}" +
          "* template,* [hidden]{display:none}"
        );
    });

    it('Includes links', () => {
      sassaby.standaloneMixin('jigsass-normalize')
        .calledWithArgs('links')
        .equals(
          "* a{background-color:transparent}" +
          "* a:active,* a:hover{outline-width:0}"
        );
    });

    it('Includes text', () => {
      sassaby.standaloneMixin('jigsass-normalize')
        .calledWithArgs('text')
        .equals(
          "* abbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}" +
          "* b,* strong{font-weight:inherit}" +
          "* b,* strong{font-weight:bolder}" +
          "* dfn{font-style:italic}" +
          "* h1{font-size:2em;margin:.67em 0}" +
          "* mark{background-color:#ff0;color:#000}" +
          "* small{font-size:80%}" +
          "* sub,* sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}" +
          "* sub{bottom:-0.25em}" +
          "* sup{top:-0.5em}"
        );
    });

    it('Includes embedded', () => {
      sassaby.standaloneMixin('jigsass-normalize')
        .calledWithArgs('embedded')
        .equals(
          "* img{border-style:none}" +
          "* svg:not(:root){overflow:hidden}"
        );
    });

    it('Includes grouping', () => {
      sassaby.standaloneMixin('jigsass-normalize')
        .calledWithArgs('grouping')
        .equals(
          "* code,* kbd,* pre,* samp{font-family:monospace,monospace;font-size:1em}" +
          "* figure{margin:1em 40px}" +
          "* hr{box-sizing:content-box;height:0;overflow:visible}"
        );
    });

    it('Includes forms', () => {
      sassaby.standaloneMixin('jigsass-normalize')
        .calledWithArgs('forms')
        .equals(
          "* button,* input,* select,* textarea{font:inherit;margin:0}" +
          "* optgroup{font-weight:bold}" +
          "* button,* input,* select{overflow:visible}" +
          "* button,* select{text-transform:none}" +
          "* button,* [type='button'],* [type='reset'],* [type='submit']{cursor:pointer}" +
          "* [disabled]{cursor:default}" +
          "* button,* html [type='button'],* [type='reset'],* [type='submit']{-webkit-appearance:button}" +
          "* button::-moz-focus-inner,* input::-moz-focus-inner{border:0;padding:0}" +
          "* button:-moz-focusring,* input:-moz-focusring{outline:1px dotted ButtonText}" +
          "* fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}" +
          "* legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}" +
          "* textarea{overflow:auto}" +
          "* [type='checkbox'],* [type='radio']{box-sizing:border-box;padding:0}" +
          "* [type='number']::-webkit-inner-spin-button,* [type='number']::-webkit-outer-spin-button{height:auto}" +
          "* [type='search']{-webkit-appearance:textfield}" +
          "* [type='search']::-webkit-search-cancel-button,* [type='search']::-webkit-search-decoration{-webkit-appearance:none}"
        );
    });

    it('Includes multiple parts at once', () => {
      sassaby.standaloneMixin('jigsass-normalize')
        .calledWithArgs('root html5')
        .equals(
          "* html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}" +
          "* body{margin:0}" +
          "* article,* aside,* details,* figcaption,* figure,* footer,* header,* main,* menu,* nav,* section,* summary{display:block}" +
          "* audio,* canvas,* progress,* video{display:inline-block}" +
          "* audio:not([controls]){display:none;height:0}" +
          "* progress{vertical-align:baseline}" +
          "* template,* [hidden]{display:none}"
        );
    });

    it('Includes all when `all` is a string', () => {
      sassaby.standaloneMixin('jigsass-normalize')
        .calledWithArgs('all')
        .equals(
          "* html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}" +
          "* body{margin:0}" +
          "* article,* aside,* details,* figcaption,* figure,* footer,* header,* main,* menu,* nav,* section,* summary{display:block}" +
          "* audio,* canvas,* progress,* video{display:inline-block}" +
          "* audio:not([controls]){display:none;height:0}" +
          "* progress{vertical-align:baseline}" +
          "* template,* [hidden]{display:none}" +
          "* a{background-color:transparent}" +
          "* a:active,* a:hover{outline-width:0}" +
          "* abbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}" +
          "* b,* strong{font-weight:inherit}" +
          "* b,* strong{font-weight:bolder}" +
          "* dfn{font-style:italic}" +
          "* h1{font-size:2em;margin:.67em 0}" +
          "* mark{background-color:#ff0;color:#000}" +
          "* small{font-size:80%}" +
          "* sub,* sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}" +
          "* sub{bottom:-0.25em}" +
          "* sup{top:-0.5em}" +
          "* img{border-style:none}" +
          "* svg:not(:root){overflow:hidden}" +
          "* code,* kbd,* pre,* samp{font-family:monospace,monospace;font-size:1em}" +
          "* figure{margin:1em 40px}" +
          "* hr{box-sizing:content-box;height:0;overflow:visible}" +
          "* button,* input,* select,* textarea{font:inherit;margin:0}" +
          "* optgroup{font-weight:bold}" +
          "* button,* input,* select{overflow:visible}" +
          "* button,* select{text-transform:none}" +
          "* button,* [type='button'],* [type='reset'],* [type='submit']{cursor:pointer}" +
          "* [disabled]{cursor:default}" +
          "* button,* html [type='button'],* [type='reset'],* [type='submit']{-webkit-appearance:button}" +
          "* button::-moz-focus-inner,* input::-moz-focus-inner{border:0;padding:0}" +
          "* button:-moz-focusring,* input:-moz-focusring{outline:1px dotted ButtonText}" +
          "* fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}" +
          "* legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}" +
          "* textarea{overflow:auto}" +
          "* [type='checkbox'],* [type='radio']{box-sizing:border-box;padding:0}" +
          "* [type='number']::-webkit-inner-spin-button,* [type='number']::-webkit-outer-spin-button{height:auto}" +
          "* [type='search']{-webkit-appearance:textfield}" +
          "* [type='search']::-webkit-search-cancel-button,* [type='search']::-webkit-search-decoration{-webkit-appearance:none}"
        );
    });

    it('Includes all when `all` is a string in a list', () => {
      sassaby.standaloneMixin('jigsass-normalize')
        .calledWithArgs('(all)')
        .equals(
          "* html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}" +
          "* body{margin:0}" +
          "* article,* aside,* details,* figcaption,* figure,* footer,* header,* main,* menu,* nav,* section,* summary{display:block}" +
          "* audio,* canvas,* progress,* video{display:inline-block}" +
          "* audio:not([controls]){display:none;height:0}" +
          "* progress{vertical-align:baseline}" +
          "* template,* [hidden]{display:none}" +
          "* a{background-color:transparent}" +
          "* a:active,* a:hover{outline-width:0}" +
          "* abbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}" +
          "* b,* strong{font-weight:inherit}" +
          "* b,* strong{font-weight:bolder}" +
          "* dfn{font-style:italic}" +
          "* h1{font-size:2em;margin:.67em 0}" +
          "* mark{background-color:#ff0;color:#000}" +
          "* small{font-size:80%}" +
          "* sub,* sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}" +
          "* sub{bottom:-0.25em}" +
          "* sup{top:-0.5em}" +
          "* img{border-style:none}" +
          "* svg:not(:root){overflow:hidden}" +
          "* code,* kbd,* pre,* samp{font-family:monospace,monospace;font-size:1em}" +
          "* figure{margin:1em 40px}" +
          "* hr{box-sizing:content-box;height:0;overflow:visible}" +
          "* button,* input,* select,* textarea{font:inherit;margin:0}" +
          "* optgroup{font-weight:bold}" +
          "* button,* input,* select{overflow:visible}" +
          "* button,* select{text-transform:none}" +
          "* button,* [type='button'],* [type='reset'],* [type='submit']{cursor:pointer}" +
          "* [disabled]{cursor:default}" +
          "* button,* html [type='button'],* [type='reset'],* [type='submit']{-webkit-appearance:button}" +
          "* button::-moz-focus-inner,* input::-moz-focus-inner{border:0;padding:0}" +
          "* button:-moz-focusring,* input:-moz-focusring{outline:1px dotted ButtonText}" +
          "* fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}" +
          "* legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}" +
          "* textarea{overflow:auto}" +
          "* [type='checkbox'],* [type='radio']{box-sizing:border-box;padding:0}" +
          "* [type='number']::-webkit-inner-spin-button,* [type='number']::-webkit-outer-spin-button{height:auto}" +
          "* [type='search']{-webkit-appearance:textfield}" +
          "* [type='search']::-webkit-search-cancel-button,* [type='search']::-webkit-search-decoration{-webkit-appearance:none}"
        );
    });

    it('Excludes sections from inclusion', () => {
      sassaby.standaloneMixin('jigsass-normalize')
        .calledWithArgs('all, links text embedded grouping forms')
        .equals(
          "* html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}" +
          "* body{margin:0}" +
          "* article,* aside,* details,* figcaption,* figure,* footer,* header,* main,* menu,* nav,* section,* summary{display:block}" +
          "* audio,* canvas,* progress,* video{display:inline-block}" +
          "* audio:not([controls]){display:none;height:0}" +
          "* progress{vertical-align:baseline}" +
          "* template,* [hidden]{display:none}"
        );
    });
  });

  describe('jigsass-normalize-root [Mixin]', () => {
    it('Includes styles', () => {
      sassaby.standaloneMixin('jigsass-normalize-root')
        .called()
        .equals(
          "* html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}" +
          "* body{margin:0}"
        );
    });
  });

  describe('jigsass-normalize-html5 [Mixin]', () => {
    it('Includes styles', () => {
      sassaby.standaloneMixin('jigsass-normalize-html5')
        .called()
        .equals(
          "* article,* aside,* details,* figcaption,* figure,* footer,* header,* main,* menu,* nav,* section,* summary{display:block}" +
          "* audio,* canvas,* progress,* video{display:inline-block}" +
          "* audio:not([controls]){display:none;height:0}" +
          "* progress{vertical-align:baseline}" +
          "* template,* [hidden]{display:none}"
        );
    });
  });

  describe('jigsass-normalize-links [Mixin]', () => {
    it('Includes styles', () => {
      sassaby.standaloneMixin('jigsass-normalize-links')
        .called()
        .equals(
          "* a{background-color:transparent}" +
          "* a:active,* a:hover{outline-width:0}"
        );
    });
  });

  describe('jigsass-normalize-text [Mixin]', () => {
    it('Includes styles', () => {
      sassaby.standaloneMixin('jigsass-normalize-text')
        .called()
        .equals(
          "* abbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}" +
          "* b,* strong{font-weight:inherit}" +
          "* b,* strong{font-weight:bolder}" +
          "* dfn{font-style:italic}" +
          "* h1{font-size:2em;margin:.67em 0}" +
          "* mark{background-color:#ff0;color:#000}" +
          "* small{font-size:80%}" +
          "* sub,* sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}" +
          "* sub{bottom:-0.25em}" +
          "* sup{top:-0.5em}"
        );
    });
  });

  describe('jigsass-normalize-embedded [Mixin]', () => {
    it('Includes styles', () => {
      sassaby.standaloneMixin('jigsass-normalize-embedded')
        .called()
        .equals(
          "* img{border-style:none}" +
          "* svg:not(:root){overflow:hidden}"
        );
    });
  });

  describe('jigsass-normalize-grouping [Mixin]', () => {
    it('Includes styles', () => {
      sassaby.standaloneMixin('jigsass-normalize-grouping')
        .called()
        .equals(
          "* code,* kbd,* pre,* samp{font-family:monospace,monospace;font-size:1em}" +
          "* figure{margin:1em 40px}" +
          "* hr{box-sizing:content-box;height:0;overflow:visible}"
        );
    });
  });

  describe('jigsass-normalize-forms [Mixin]', () => {
    it('Includes styles', () => {
      sassaby.standaloneMixin('jigsass-normalize-forms')
        .called()
        .equals(
          "* button,* input,* select,* textarea{font:inherit;margin:0}" +
          "* optgroup{font-weight:bold}" +
          "* button,* input,* select{overflow:visible}" +
          "* button,* select{text-transform:none}" +
          "* button,* [type='button'],* [type='reset'],* [type='submit']{cursor:pointer}" +
          "* [disabled]{cursor:default}" +
          "* button,* html [type='button'],* [type='reset'],* [type='submit']{-webkit-appearance:button}" +
          "* button::-moz-focus-inner,* input::-moz-focus-inner{border:0;padding:0}" +
          "* button:-moz-focusring,* input:-moz-focusring{outline:1px dotted ButtonText}" +
          "* fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}" +
          "* legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}" +
          "* textarea{overflow:auto}" +
          "* [type='checkbox'],* [type='radio']{box-sizing:border-box;padding:0}" +
          "* [type='number']::-webkit-inner-spin-button,* [type='number']::-webkit-outer-spin-button{height:auto}" +
          "* [type='search']{-webkit-appearance:textfield}" +
          "* [type='search']::-webkit-search-cancel-button,* [type='search']::-webkit-search-decoration{-webkit-appearance:none}"
        );
    });
  });
});
