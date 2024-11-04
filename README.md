# Frontend Mentor - Meet landing page solution

This is a solution to the [Meet landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![screenshot-desktop](https://raw.githubusercontent.com/tomwinskell/meetlandingpage/refs/heads/main/assets/screenshots/screenshot-desktop.png)
![screenshot-tablet](https://raw.githubusercontent.com/tomwinskell/meetlandingpage/refs/heads/main/assets/screenshots/screenshot-tablet.png)

### Links

- Solution URL: [https://github.com/tomwinskell/meetlandingpage](https://github.com/tomwinskell/meetlandingpage)
- Live Site URL: [https://tomwinskell.github.io/meetlandingpage](https://tomwinskell.github.io/meetlandingpage)

## My process

### Built with

- Bootstrap 5.3
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- BEM

### What I learned

- Took longer than expected because I was learning Bootstrap.
- Working mostly in the html file saves switching back and forth between html and css. Will be quicker once I know all of the class names and specifics of Bootstrap.
- Layout was challenging because of the different layouts for each screen size.
- CSS Grid can be used to overlay items. Blog post here: [http://tomwinskell.simple.ink/](https://tomwinskell.simple.ink/overlay-elements-with-css-grid-122eebbfd13f80f09bafe3492f9a942b).

CSS code snipet for footer with overlaid elements. Screenshot below.

```css
.footer {
  display: grid;
  grid-template-rows: auto 28px 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}

.footer__divider {
  grid-area: 1 / 2 / 3 / 3;
  align-self: end;
  z-index: 1;
}

.footer__container {
  grid-area: 2 / 1 / 4 / 4;
}
```

![screenshot-footer](https://raw.githubusercontent.com/tomwinskell/meetlandingpage/refs/heads/main/assets/screenshots/screenshot-footer.png)

### Continued development

- BEM
- CSS Grid
- Bootstrap

### Useful resources

- [https://getbootstrap.com/](https://getbootstrap.com/)
- [http://tomwinskell.simple.ink/](https://tomwinskell.simple.ink/overlay-elements-with-css-grid-122eebbfd13f80f09bafe3492f9a942b).
