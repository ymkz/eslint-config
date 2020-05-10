# @ymkz/eslint-config

> ymkz's eslint config

<p>
  <a href="https://github.com/ymkz/eslint-config" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/github/workflow/status/ymkz/eslint-config/release-master/master?label=master&style=for-the-badge" />
  </a>
  <a href="https://www.npmjs.com/package/@ymkz/eslint-config" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/npm/v/@ymkz/eslint-config?style=for-the-badge" />
  </a>
  <a href="https://www.npmjs.com/package/@ymkz/eslint-config" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/npm/l/@ymkz/eslint-config?style=for-the-badge" />
  </a>
</p>

## Install

```sh
yarn add --dev @ymkz/eslint-config
```

## Usage

Write the following code in `.eslintrc.yml`

```.eslintrc.yml
root: true
extends:
  - '@ymkz/eslint-config'
  - '@ymkz/eslint-config/react'
  - '@ymkz/eslint-config/import'
overrides:
  - files: '*.ts'
    extends: '@ymkz/eslint-config/typescript'
```

## References

- [expo/packages/eslint-config-universe at master · expo/expo](https://github.com/expo/expo/tree/master/packages/eslint-config-universe)
- [liferay/eslint-config-liferay: ESLint shareable config for the Liferay JavaScript Style](https://github.com/liferay/eslint-config-liferay)
- [benmosher/eslint-plugin-import: ESLint plugin with rules that help validate proper imports.](https://github.com/benmosher/eslint-plugin-import)
- [hzdg/linter-configs: A repository of config files for all the linters we use](https://github.com/hzdg/linter-configs)
- [conten2/eslint-config: ESLint sharable config for Project conten2](https://github.com/conten2/eslint-config)

## Author

👤 **ymkz**

- Twitter: [@ymkzly](https://twitter.com/ymkzly)
- Github: [@ymkz](https://github.com/ymkz)

## Show your support

Give a ⭐️ if this project helped you!

## License

Copyright © 2020 [ymkz](https://github.com/ymkz).

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
