# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

- Active States

![](./design/active-states.jpg)


- Desktop Design

![](./design/desktop-design.jpg)


- Desktop preview

![](./design/desktop-preview.jpg)


- Mobile Design

![](./design/mobile-design.jpg)



### Links

- Solution URL: [Check My Solution Here](https://github.com/rereloluwavictor2001/FAQ-Accordion-Card)
- Live Site URL: [See the live solution here](https://rereloluwavictor2001.github.io/FAQ-Accordion-Card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

I really learnt few vital lines of code especially under CSS and JavaScript. As as much as I'd love to use jQuery, I just had to settle for javascript since I had a better grasp of it. The logic behind the arrow-down arrows got me thinking for hours until I later arrived a very good compromise.

For code snippets, see below:

```css
body {
    background-image: linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%));
}

.first-container {
  overflow: hidden;
}

.question::after {
    content: url("icon-arrow-down.svg");
}
```


### Continued development

Honestly, the only way can only be forward. I will work more on javascript related challenges more to better make me understand it and also a take a course that is strictly javascript to help me understand the language properly.


### Useful resources

- All thanks to w3schools because it really helped me test the particular line of code I needed before inserting it to my project.


## Author

- Frontend Mentor - [@rereloluwavictor2001](https://www.frontendmentor.io/profile/rereloluwavictor2001)
- Twitter - [@rereloluwaalimi](https://www.twitter.com/rereloluwaalimi)

