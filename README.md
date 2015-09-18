# eyeglass-inline-svg

Now you can finally inline SVG files with libsass, too!


Installation
------------
````
npm install --save-dev eyeglass-inline-svg
````


Usage
-----
````
@import 'inline-svg';

.test {
  background: inline-svg-file("./assets/svg/opt/test.svg") center no-repeat;
}
````
Using a variable is suitable for including the SVG background in a CSS3 multiple background, 
though extending (see below) is not possible in the particular selector then.


Using an inlined SVG multiple times
-----------------------------------
````
@import 'inline-svg';

$svg-text: inline-svg-file("./assets/svg/opt/test.svg");
@mixin svg-test {
  background: $svg-test center no-repeat;
}
%svg-test {
  @include svg-test;
}
````
````
// [...]
.test1 {
  @extend %svg-test;
}
// [...]
.test2 {
  @extend %svg-test;
}
// [...]
````
When the inlined background should be reused multiple times, using an extend can be more efficient. 
The mixin has to be used when overriding properties - as extends cannot do this (style order dependent).


Arguments
---------
### inline-svg-file
Takes the _path_ to a SVG _file_ and inlines it.

#### path
Path to the SVG file.

#### encoding
Encoding of the file.
Defaults to utf8.


### inline-svg
Takes the _string_ of a SVG document and inlines it.

#### str
The SVG string to be inlined.


Rationale
---------
This eyeglass module actually provides two functions, one for inlining a SVG *string* and one for inlining a SVG *file*.
The reason behind this is that one may want first to manipulate the SVG string to be inlined, e.g. for modifications that aren't possible with CSS properties like fill. For this the SVG string is first fetched using file-text function (provided by   [eyeglass-file-text](https://github.com/strarsis/eyeglass-file-text)), passed to a SVG manipulation function and then finally passed to the inline-svg function of this eyeglass module.


Optimization + Troubleshooting
------------------------------
The same as with the underlying [eyeglass-inline-urlescape](https://github.com/strarsis/eyeglass-inline-urlescape) module applies: Optimization of the input SVGs must be performed by a separate, specialized tool (e.g. [svgo](https://github.com/svg/svgo)) and/or in an extra build step (e.g. using [gulp-svgmin](https://github.com/ben-eb/gulp-svgmin)) prior compiling the sass files.

Please note that automated SVG optimization may break a SVG or make it unrenderable in some browsers, so in case of trouble with the inlined SVG, first check the optimized input SVG by viewing it directly as file in browser.


Misc
----
If you only want/need the escaped URL string without the rest of the data URI, use the inline-urlescape function provided by the underlying [eyeglass-inline-urlescape](https://github.com/strarsis/eyeglass-inline-urlescape) module.
