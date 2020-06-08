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

* Add callbacks `onOpen`, `onClose`, `beforeOpen`, `beforeClose`
* Add optional scroll lock
* Add optional focus control inside the modal window
* Add support for CSS animations
* Add accessibility support
* Add a dev server for local development
* Write documentation

## Contribute

The current build doesn't contain a dev server, but you can run `build` script to build the library and check for changes

```
git clone git@github.com:Alexandrshy/keukenhof.git
cd keukenhof
yarn
```
