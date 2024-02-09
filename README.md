# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Solution Gif](#Solution-Gif)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Solution Gif

<p align="center">
  <img alt="Sunnyside gif" src=".github/sunnyside.gif" width="100%">
</p>


### Links

- Solution URL: [My Solution](https://github.com/Felipe-dot/sunnyside-landing-page)
- Live Site URL: [Live site](https://sunnysidewebpage.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- CSS animations


### What I learned
I learn to use diferent aproachs to change page css.

using nth to change a specifc element

```css
p:nth-child(1) {
  font-family: "Fraunces", sans-serif;
  color: var(--very-dark-desaturated-blue);
}

.images-section div:nth-child(4) {
  background-image: url("images/desktop/image-gallery-sugarcubes.jpg");
}
```

Change image color using filter

```css
footer .social-medias a img:hover {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(236deg)
    brightness(111%) contrast(101%);
}

```


### Continued development


I want to keep improving in

- Semantic HTML
- CSS
- Responsive Layouts
- Web Technologies

## Author

- Website - [Felipe-dot](https://www.your-site.com)
- Frontend Mentor - [@Felipe-dot](https://www.frontendmentor.io/profile/Felipe-dot)

## Acknowledgments

I want to thank [@Adarsh](https://github.com/Adarshshanbhag5) for his solution that helped me with the challenge layout issues.


