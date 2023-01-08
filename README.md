# @lavaflow/panels-layout example

This is an example of [@lavaflow/panels-layout](https://github.com/vagran/panels-layout) package application. It is written using [Quasar](https://quasar.dev/) framework for fancy UI.

See demo here: https://vagran.github.io/panels-layout-demo/

Run `npm run build` to build the distribution.
Run `npm run dev` to run development server.

This example uses Git submodule for linking with `panels-layout` package because it is also used
extensively for the package development, and such approach is much more convenient than using `npm`
module. Normally, you should use `npm` module by defining `@lavaflow/panels-layout` dependency in
your `package.json`.
