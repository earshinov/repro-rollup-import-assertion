# repro-rollup-import-assertion

[Problem with using import assertions in rollup.config.ts · Issue #474 · ezolenko/rollup-plugin-typescript2](https://github.com/ezolenko/rollup-plugin-typescript2/issues/474)

```shell
$ make run
yarn run build
[!] SyntaxError: Unexpected identifier 'assert'
    at compileSourceTextModule (node:internal/modules/esm/utils:337:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:166:18)
    at callTranslator (node:internal/modules/esm/loader:437:14)
    at ModuleLoader.moduleProvider (node:internal/modules/esm/loader:443:30)
    at async ModuleJob._link (node:internal/modules/esm/module_job:106:19)


make: *** [run] Error 1
```

---

Version info:

```shell
$ node --version
v22.9.0
```

---

Repro steps:

1. Make sure to use the same Node.js version
1. `$ corepack enable`
1. `$ yarn`
1. `$ make run`

---

Trying out with `tsc`:

1. `yarn run tsc -p tsconfig.dev.json`
2. _out/rollup.config.js_:

    ```javascript
    import pkg from './package.json' with { type: 'json' }; // 👈 as expected
    export default {
        input: 'src/index.mjs',
        output: [{ file: pkg.exports['.'].import, format: 'es', sourcemap: true }]
    };
    ```
