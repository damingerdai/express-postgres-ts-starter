# [0.3.0](https://github.com/damingerdai/express-postgres-ts-starter/compare/v0.2.0...v0.3.0) (2022-10-24)

### Bug Fixes

- remove 'no-unused-vars' eslint rules ([705373d](https://github.com/damingerdai/express-postgres-ts-starter/commit/705373d5873091f1256ae0025014401790eeb536))
- use new knex import statement ([e945fa6](https://github.com/damingerdai/express-postgres-ts-starter/commit/e945fa60ea1ce1caa9a5eccd534025be43ef4e74))

### Features

- add compression middleware ([#175](https://github.com/damingerdai/express-postgres-ts-starter/issues/175)) ([05a6ad7](https://github.com/damingerdai/express-postgres-ts-starter/commit/05a6ad7f71d5623bbaa8ab6bee829925cbaa0655))
- add eslint fix in lint-staged and run more check in pre-push git hook ([#215](https://github.com/damingerdai/express-postgres-ts-starter/issues/215)) ([3f6d3b4](https://github.com/damingerdai/express-postgres-ts-starter/commit/3f6d3b4d5443bfe8b368b35df30598258566c420))
- add logger based on winston ([#212](https://github.com/damingerdai/express-postgres-ts-starter/issues/212)) ([d407a06](https://github.com/damingerdai/express-postgres-ts-starter/commit/d407a0646a33aecc1c85e5ff43fe437624016f28))
- add minio config support ([f9bd6d0](https://github.com/damingerdai/express-postgres-ts-starter/commit/f9bd6d0497347d771fff155462cc252c66da0bac))
- add morgan middleware ([eee1ded](https://github.com/damingerdai/express-postgres-ts-starter/commit/eee1ded006bf81f15057d2487dd0f4f8576cf435))
- add redis docker image support ([#211](https://github.com/damingerdai/express-postgres-ts-starter/issues/211)) ([3ad948d](https://github.com/damingerdai/express-postgres-ts-starter/commit/3ad948dedfe0cd1a9ec48ebbc712cc1d888140f0))
- add redis service ([#214](https://github.com/damingerdai/express-postgres-ts-starter/issues/214)) ([ba26948](https://github.com/damingerdai/express-postgres-ts-starter/commit/ba26948bc9f25d7836105bad57eb3f465fb030d8))
- add upload file api support with minio ([#198](https://github.com/damingerdai/express-postgres-ts-starter/issues/198)) ([1fa0dac](https://github.com/damingerdai/express-postgres-ts-starter/commit/1fa0dac099051ac5b417ce2ca26572b510318698))
- **db:** add pgcrypto migrations ([a09986f](https://github.com/damingerdai/express-postgres-ts-starter/commit/a09986f82cc24d0144dd3085531a16ded3b1c9a1))
- **db:** db migrate script runs on local ([b98766d](https://github.com/damingerdai/express-postgres-ts-starter/commit/b98766d7becdcf5c88b8275445bcc445ac87a1a3))
- **db:** db seed script support local env ([0b05ea1](https://github.com/damingerdai/express-postgres-ts-starter/commit/0b05ea1edbccc616e84f19ee46419a4de3d4126f))
- set request body max size is 50mb ([46eb2bb](https://github.com/damingerdai/express-postgres-ts-starter/commit/46eb2bb0c4c08e2e3adddfa3cc31434c9d68003d))

# [0.2.0](https://github.com/damingerdai/express-postgres-ts-starter/compare/v0.1.0...v0.2.0) (2020-12-26)

### Features

- add graphql support based on apollo ([7d57d76](https://github.com/damingerdai/express-postgres-ts-starter/commit/7d57d76e8dfe33bb4e43caa7c6dbfde95a97cd95))

# 0.1.0 (2020-09-22)

### Bug Fixes

- helmet need sub type support ([6041043](https://github.com/damingerdai/express-postgres-ts-starter/commit/6041043af056f6dec69000e786e6aa3e61438f8d))
- knexer create should use await ([9d355e7](https://github.com/damingerdai/express-postgres-ts-starter/commit/9d355e757351b3b507f3e837ba093cf61e6c1f90))

### Features

- add cokkie parser ([fa17191](https://github.com/damingerdai/express-postgres-ts-starter/commit/fa17191b433e570df31448a72693fd8b26dc74c6))
- add db config ([cfb9587](https://github.com/damingerdai/express-postgres-ts-starter/commit/cfb958788a0bfc560e7400627ec4d4a19a1669f9))
- add db utils ([25e8e0f](https://github.com/damingerdai/express-postgres-ts-starter/commit/25e8e0f8f9b9ff2d86c329b96a286306b403512c))
- add helmet middleware support ([0bb5265](https://github.com/damingerdai/express-postgres-ts-starter/commit/0bb5265ee52b48be1d8cf5e798c0bd7dd08096d9))
- add knex and env file ([4e81711](https://github.com/damingerdai/express-postgres-ts-starter/commit/4e81711005d808016b143e65d828ad61413e5a95))
- add middelwares ([b4a11a2](https://github.com/damingerdai/express-postgres-ts-starter/commit/b4a11a2951dc700fbc522e06ca2fa5a8d2888758))
- knex seed and migration ([e8902fd](https://github.com/damingerdai/express-postgres-ts-starter/commit/e8902fd05765af93cff91acd9187f14a2ec15c6b))

### Reverts

- Revert "ci(action): remove the node version support" ([39e2a0a](https://github.com/damingerdai/express-postgres-ts-starter/commit/39e2a0a7cd5c24c31f57c62aa129438ec792536f))
- rollback build and cleanup operation ([bfe763e](https://github.com/damingerdai/express-postgres-ts-starter/commit/bfe763e6e488c472bf4e75de5ba490dbd7f35cca))
