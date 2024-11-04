# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![screenshot-desktop](https://github.com/tomwinskell/article-preview-component/blob/main/Frontend%20Mentor%20_%20Article%20preview%20component%20%C2%B7%2011.07am%20%C2%B7%2011-04.jpeg?raw=true)
![screenshot-tablet](https://github.com/tomwinskell/article-preview-component/blob/main/Frontend%20Mentor%20_%20Article%20preview%20component.jpeg?raw=true)

### Links

- Solution URL: [https://github.com/tomwinskell/meetlandingpage](https://github.com/tomwinskell/article-preview-component)
- Live Site URL: [https://tomwinskell.github.io/meetlandingpage](https://tomwinskell.github.io/article-preview-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- BEM
- Javascript
- Media queries (Javascript and CSS)

### What I learned

- JavaScript adds a layer of complexity to a project. The JavaScript is actually more straightforward than the CSS. However, there were more lines of JavaScript to write than I expected. I think that the JavaScript for more complex projects could easily get out of control.

- Absolute elements are positioned relative to the first parent with the property display: relative. If there are none then the element will default to using the browser window.

- If you have a div with overflow: hidden then your absolute element cannot overflow this div. Unless you use a grand-parent set to position: relative where overflow is not hidden.

- There are media queries in JavaScript. Can be used with if else statements to determine which actions should be completed.

```js
const mediaQuery = window.matchMedia('(min-width: 768px');

if (mediaQuery.matches) {
  arrowDown.classList.remove('hidden');
  shareButton.classList.add('dark');
  shareButtonImage.setAttribute('src', '/images/icon-share--white.svg');
}
```

- With flex box, text takes priority and will always grow to the maximum possible. Unless you specify that imagex and other divs must not shrink, using flex-shrink: 0.

- Drawing a triangle is possible with a single div.

```css
.preview__footer__share__arrow-down {
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid var(--dark-blue);
}
```

### Continued development

- JavaScript integration with CSS and HTML
- BEM

### Useful resources

- [CSS Triangle](https://css-tricks.com/snippets/css/css-triangle/)
- [Working with JavaScript media queries](https://css-tricks.com/working-with-javascript-media-queries/).
- [How to make absolute positioned elements overlap their overflow hidden parent](https://front-back.com/how-to-make-absolute-positioned-elements-overlap-their-overflow-hidden-parent/)
