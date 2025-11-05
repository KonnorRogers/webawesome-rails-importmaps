# README

Web Awesome + Rails Import Maps

Important files:

- `app/views/layouts/application.html.erb` this is where the Web Awesome stylesheet gets loaded.
- `app/javascript/application.js` which has the setup code for auto-loading components
- `script/pull-webawesome.sh` which is a bash script to pull Web Awesome's tarball from NPM and then make it a little more ergonomic to work with.
- `public/webawesome` - This is where the Web Awesome files live.

You can update `./public/webawesome` by running: `bash script/pull-webawesome.sh`.

##### Using script/pull-webawesome-advanced.bash

This script is for scenarios where:

- You only want the minimal amount of Web Awesome for Vanilla JavaScript and CSS.
- Changing Web Awesome versions.
- Separating out where JavaScript and CSS styles are served.

Example usage:
-d = destination directory for JavaScript.
-s = styles(CSS) destination directory
-v = Web Awesome Version
-k = Keep React and Typescript (default is remove them)

Pull default version 3.0.0 into `/public/webawesome` without `react` and `internal` directories and without TypeScript files.
```sh
./bin/pull-webawesome-advanced.bash
```

Pull version `3.0.0.beta.6` JavaScript into `vendor/javascript/webawesome`. CSS files into `public/webawesome-styles` and keep React and TypeScript files.
```sh
./bin/pull-webawesome-advanced.bash -k -d vendor/javascript/ -s public/webawesome-styles -v 3.0.0.beta.6
```

## Explanation of `./public/webawesome`

The reason I chose to dump all the Web Awesome files into `./public/webawesome` is that `app/javascript` / `app/assets` get "digested" at build time and would mess with the autoloader functionality. Its possible, but much more annoying to get setup properly.

## Why not `bin/importmap pin @awesome.me/webawesome`

Well, the problem is that Rails Importmaps is functionally incompatible with "multi-entrypoint" NPM packages because it does not download all files from NPM, which makes it almost impossible to use with Web Awesome directly.

See: <https://github.com/rails/importmap-rails/pull/235> for more info / discussion.

