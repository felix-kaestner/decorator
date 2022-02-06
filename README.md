# Decorator

<p align="center">
    <span>Decorator for ES6 classes.</span>
    <br><br>
    <a href="https://github.com/felix-kaestner/decorator/issues">
        <img alt="Issues" src="https://img.shields.io/github/issues/felix-kaestner/decorator?color=29b6f6&style=flat-square">
    </a>
    <a href="https://github.com/felix-kaestner/decorator/stargazers">
        <img alt="Stars" src="https://img.shields.io/github/stars/felix-kaestner/decorator?color=29b6f6&style=flat-square">
    </a>
    <a href="https://github.com/felix-kaestner/decorator/blob/main/LICENSE">
        <img alt="License" src="https://img.shields.io/github/license/felix-kaestner/decorator?color=29b6f6&style=flat-square">
    </a>
    <a href="https://twitter.com/kaestner_felix">
        <img alt="Twitter" src="https://img.shields.io/badge/twitter-@kaestner_felix-29b6f6?style=flat-square">
    </a>
</p>

## Install

Install with `npm` or `yarn`:

```
$ npm i git+https://github.com/felix-kaestner/decorator
```

```
$ yarn add git+https://github.com/felix-kaestner/decorator
```

## Usage

```TypeScript
import {sealed} from '@felix-kaestner/decorator'

@sealed
class BugReport {
  title: string;

  constructor(t: string) {
    this.title = t
  }
}
```

## API

### @sealed

Apply [Object.seal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) on a class constructor and prototype with `@sealed`.

```TypeScript
import {sealed} from '@felix-kaestner/decorator'

@sealed
class BugReport {
  title: string;

  constructor(t: string) {
    this.title = t
  }
}
```

### @immutable

Apply [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) on a class constructor and prototype with `@immutable`.

```TypeScript
import {immutable} from '@felix-kaestner/decorator'

@immutable
class BugReport {
  title: string;

  constructor(t: string) {
    this.title = t
  }
}
```

### @final

Apply both [Object.seal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) and [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) on a class constructor and prototype with `@final`.

```TypeScript
import final from '@felix-kaestner/decorator'

@final
class BugReport {
  title: string;

  constructor(t: string) {
    this.title = t
  }
}
```

This is equivalent to using both `@sealed` and `@immutable`.

## Contribute

All contributions in any form are welcome! 🙌  
Just use the [Issue](.github/ISSUE_TEMPLATE) and [Pull Request](.github/PULL_REQUEST_TEMPLATE) templates and
I will be happy to review your suggestions. 👍

## Support

Any kind of support is well appreciated! 👏  
If you want to tweet about the project, make sure to tag me [@kaestner_felix](https://twitter.com/kaestner_felix). You can also support my open source work on [GitHub Sponsors](https://github.com/sponsors/felix-kaestner). All income will be directly invested in Coffee ☕!

## Cheers ✌
