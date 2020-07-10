# Keukenhof

Micro library for creating beautiful modal windows

## Table of Contents

* [Installation](#installation)
* [Example](#example)
* [Roadmap](#roadmap)
* [Contribute](#contribute)

## Installation

For install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```
npm install keukenhof
yarn add keukenhof
```

CDN link

```js
<script src="https://unpkg.com/keukenhof@1.1.0/dist/index.js"></script>
```

## Example

```html
<div id="modal" class="modal">
    <div class="modal__overlay" data-keukenhof-close></div>
    <div class="modal__container" role="dialog">
        <div class="modal__wrapper">
        <button
            class="modal__button modal__button--close"
            data-keukenhof-close
        >
            Close modal
        </button>
        <main class="modal__main">
            <h2 class="modal__title">Title</h2>
            <p class="modal__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#" class="modal__link">More information</a>
        </main>
        </div>
    </div>
</div>
```

```js
Keukenhof.init();
```

## Roadmap

* Write documentation
* ~~Add optional focus control inside the modal window~~
* ~~Add accessibility support~~
* ~~Add callbacks `onOpen`, `onClose`, `beforeOpen`, `beforeClose`~~
* ~~Add support for CSS animations~~
* ~~Add optional scroll lock~~
* ~~Add a dev server for local development~~

## Contribute

1. Clone the repository `git@github.com:Alexandrshy/keukenhof.git`
2. Go to the project directory `cd keukenhof`
3. Install dependencies `yarn`
4. Run dev build with auto rebuild after any changes `yarn build:dev`
5. Complete your improvements, commit changes and submit your pull request for review code
