# prework-study-guide
UofT coding bootcamp prework project


## Table of contents

  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![Screenshot-Desktop-Prework-Study-Guide](https://user-images.githubusercontent.com/123032297/221490397-5589e9b3-788a-49f6-85c9-a7f628040747.png)
![Screenshot-Desktop-Prework-Study-Guide-2](https://user-images.githubusercontent.com/123032297/221490569-0eda6032-1013-4964-9024-f4c87441f0c4.png)
![Screenshot-Mobile-Prework-Study-Guide](https://user-images.githubusercontent.com/123032297/221490585-aeb1dc45-34ab-4a9d-b9ab-2be940014d5a.png)




### Links

- Solution URL: https://matthew-millard.github.io/prework-study-guide/

## My process

### Built with

- HTML
- CSS
- JavaScript
- Flexbox
- Desktop-first workflow

### What I learned

- Just learnt about the forEach() method, so it was awesome to be able to apply it to this assignment.
```
const accordions = Array.from(document.querySelectorAll('.card'))


accordions.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.card__header')
  const accordionContent = accordion.querySelector('.card__content')



    accordionHeader.addEventListener('click', event => {
      accordionContent.classList.toggle('card__content--open')
  })
})

```

### Continued development

- Become more familiar with the BEM naming convention.
- Keep progressing with JavaScript and focusing on the fundamentals.
- Develop a better workflow.

## Author

- Github - [matthew-millard](https://github.com/matthew-millard)

## Acknowledgments

- [Kevin Powell](https://www.kevinpowell.co/)
- [Zell](https://learnjavascript.today/)
