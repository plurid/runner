<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/runner/master/about/identity/runner-logo.png" height="250px">
    <br />
    <br />
    <a target="_blank" href="https://github.com/plurid/runner/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-DEL-blue.svg?colorB=1380C3&style=for-the-badge" alt="License: DEL">
    </a>
</p>



<h1 align="center">
    runner
</h1>


<h3 align="center">
    Test Runner
</h3>



`runner` is intended to run programmatic tests with complete preparation and postparation stages.

Supported languages:

+ `JavaScript`
+ `TypeScript`


### Contents

+ [Usage](#usage)
+ [Packages](#packages)



## Usage

Install `runner`

```
npm install --save-dev @plurid/runner
```

or

```
yarn add -D @plurid/runner
```

write a test `runner` using `TypeScript` or `JavaScript`, adding `.run`, `.test`, or `.runner` before the file extension (e.g. `example.run.ts`)

``` typescript
import runner, {
    RunnerPrepare,
    RunnerPostpare,
    RunnerRun,
} from '@plurid/runner';



interface Prepared {
    data: boolean;
}
interface Runned {
    data: boolean;
}


const prepare: RunnerPrepare<Prepared> = async (
    check,
) => {
    const data = Math.random() < 0.5;

    check('example · works', data, true);

    return {
        data,
    };
}

const run: RunnerRun<Prepared, Runned> = async (
    check,
    prepared,
) => {
    check('example · works', prepared.data, true);

    return {
        data: false,
    };
}

const postpare: RunnerPostpare<Prepared, Runned> = async (
    check,
    prepared,
    runned,
) => {
    check('example · works', prepared.data, true);
    const passed = check('example · works', runned.data, true);

    if (passed) {
        // passed action
    } else {
        // not passed action
    }
}


runner(
    prepare,
    run,
    postpare,
);
```

The `prepare` and `postpare` are meant for setting up and tearing down the environment in which the `run` will execute.

The results of `prepare` are passed to `run`, and the results of `prepare` and `run` are passed to `postpare`.

Usually, `prepare` and `postpare` imply priviledged executions (such as writing/deleting directly from the database, direct manipulation of the file system, anything required to ensure the `run` is set to pass).

`check`s can be performed at any stage of the `runner`.

A `check` respects the following interface

``` typescript
export type Check = (
    message: string,
    testValue: any,
    expectedValue: any,
    relationship?: CheckRelationship,
) => void;

export type CheckRelationship =
    | '==' | '<' | '<=' | '>' | '>=';
```

To execute the runners use the `runner` cli

``` bash
runner /path/to/test/file/or/folder
```



## Packages

<a target="_blank" href="https://www.npmjs.com/package/@plurid/runner">
    <img src="https://img.shields.io/npm/v/@plurid/runner.svg?logo=npm&colorB=1380C3&style=for-the-badge" alt="Version">
</a>

[@plurid/runner-javascript][runner-javascript] • the `JavaScript`/`TypeScript` implementation

[runner-javascript]: https://github.com/plurid/runner/tree/master/packages/runner-javascript
