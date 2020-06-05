# Como north

GitHub template for starting new projects 🏞️

## Getting Started

Create your repository and clone this project there

```
git clone git@github.com:Alexandrshy/coma_test-2.git
```

Change the project name and links in the `pakcage.json` file so that the auto-publishing of your package works correctly

```diff
package.json
{
-      "name": "como-north",
+      "name": "new-poject",
       "repository": {
           "type": "git",
-          "url": "https://github.com/Alexandrshy/como-north"
+          "url": "https://github.com/author/new-poject"
       },
       "bugs": {
-          "url": "https://github.com/Alexandrshy/como-north/issues"
+          "url": "https://github.com/author/new-poject/issues"
       },
-      "homepage": "https://github.com/Alexandrshy/como-north",
+      "homepage": "https://github.com/author/new-poject",
}
```

For the actions to work correctly, you need to add two constants: 

![Secrets](https://user-images.githubusercontent.com/14329906/82730674-8ab03f80-9d12-11ea-877e-af77993d96af.png)

## Running the finish script

To verify the correctness of the changes you can run `finish`. This script is automatically launched during the creation of the PR

```
npm run finish
```

## Built With

* [Babel](https://babeljs.io/) - Babel is a tool that helps you write code in the latest version of JavaScript
* [Rollup.js](https://rollupjs.org/) - Rollup is a module bundler for JavaScript
* [TypeScript](https://www.typescriptlang.org/) - TypeScript is an open-source programming language developed
* [ESlint](https://eslint.org/) - ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code
* [Prettier](https://prettier.io/) - An opinionated code formatter
* [Commitlint](https://github.com/conventional-changelog/commitlint) - Lint commit messages
* [Husky](https://github.com/typicode/husky) - Precommit hook
* [semantic-release](https://github.com/semantic-release/semantic-release)
* [semantic-release-action](https://github.com/cycjimmy/semantic-release-action) - GitHub Action for Semantic Release


## Versioning

We use [semantic-release](https://github.com/semantic-release/semantic-release) for versioning. For the versions available, see the [tags on this repository](https://github.com/Alexandrshy/como-north/tags)

## Authors

* **Alex Shualev** - *Initial work* - [Alexandrshy](https://github.com/Alexandrshy)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
