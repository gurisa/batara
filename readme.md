# Batara 😇
Javascript framework for laravel users

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  
🤩 Motivations
---
1. Provide easy to use laravel like pattern on javascript
2. Provide boilerplate for my internal works and jobs

🖖 Usage
---
## Garuda Scaffolding
1. Coming soon! [garuda][garuda-repository]

## Manual use
1. Install packages: `npm install batara`
2. Import package
```ts
  import { Application } from 'batara';

  const app = new Application({
    name: "service",
    version: "1.0",
    debug: true,
    environment: "local",
    timezone: "+07:00",
    host: "localhost",
    port: 3000,
  });

  app.start();
```
3. Enjoy

## Development
1. Install packages: `npm install`
2. Available commands
- Check development: `npm run dev`
- Test with coverage: `npm run test`
- Test with watcher: `npm run test:watch`
- Build: `npm run build`
3. Enjoy

✔️ Test & Coverages
---
![Test coverages][coverage-url]

📋 Docs
---
Complete documentations are available [here][document-url]

**Legends:**
- ✔️ Available with test
- ⚠️ Available without test (Use with your own risk 😆)
- ❌ Unavailable yet
- ❓ Ideation/request

| Status | Feature   | Description |
| --- | ------       | ------      |
| ✔️ | Constant      |  |
| ⚠️ | Controller    |  |
| ✔️ | Entity        |  |
| ✔️ | Error         |  |
| ✔️ | Interface     |  |
| ⚠️ | Middleware    |  |
| ⚠️ | Provider      |  |
| ✔️ | Type          |  |
| ❌ | Model         |  |

❓ Questions
---
1. When to use `Union type: object | array` and `Generic type: <T, S>`
- Answer: With union type we get mixed type (object or array or both), with generic we get one of them (object or array)
2. When to use `Literal type: ADMIN | AUTHOR` and `Enum type: enum { ADMIN = "ADMIN", AUTHOR = "AUTHOR" }`
3. Should we use generic response or not in `ResponseBody` Entity, e.g:
- Field `data` sometime may contain `Array<T>` or `Object`
- Field `error` contain `Array<Error>` but if we look at the property name it singular name.
4. Consider to implement `authenticate` and `authenticateHandler`
5. How to set Class property if there are many property to insert. e.g:
- If we fill within the `constructor`, the constructor then bloated
- If we use setter, the `setter` caling may be chaining as hell
- Maybe we can use `factory`?

👀 Issues
---
1. There's issue with `nodemon ^2.0.9` when restarting app causing port is already in use, so we downgrade to the previous version `nodemon v2.0.7`. Hope they fix it in the future so we can enjoy using nodemon newer version again. 

🚀 Roadmaps
---
To understand more about our progress please see [changelog][changelog-url]

1. write unit and integration tests
2. write complete documentation
3. replace `express-validator` with [`validator.js`, `joi`, `indicative(adonis)`] and custom `declarative-validator`
4. implementation of: model database, model messaging

🤩 Contributor
---
[![](https://github.com/kokoraka.png?size=50)](https://github.com/kokoraka)

Feel free to [contribute][pull-url]

💖 Support
---
This is open source project feel free to contributes and supporting us through: [Idaman][website-url]

📜 License
---
MIT

[npm-image]: https://img.shields.io/npm/v/batara.svg
[npm-url]: https://npmjs.org/package/batara
[downloads-image]: https://img.shields.io/npm/dm/batara.svg
[downloads-url]: https://npmcharts.com/compare/batara?minimal=true
[coverage-url]: https://github.com/idaman-id/batara/blob/master/asset/image/coverage.png?raw=true
[document-url]: https://github.com/idaman-id/batara/tree/master/docs
[changelog-url]: https://github.com/idaman-id/batara/blob/master/CHANGELOG.MD
[pull-url]: https://github.com/idaman-id/batara/pulls
[website-url]: https://idaman.id
[garuda-repository]: https://github.com/idaman-id/garuda
