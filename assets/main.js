// const topics = ['HTML', 'CSS', 'Git', 'JavaScript']
// const randomTopic = Math.floor(Math.random() * topics.length)
// // const randomTopic = topics[Math.floor(Math.random() * topics.length)]
// // console.log(randomTopic)


// function listTopics() {
//     for ( let i = 0; i < topics.length; i++ ) {
//         console.log(topics[i])
//     }
// }

// function selectTopic() {
//     if (topics[randomTopic] === 'HTML') {
//     console.log("Let's study HTML!");
//   } else if (topics[randomTopic] === 'CSS') {
//     console.log("Let's study CSS!");
//   } else if (topics[randomTopic] === 'Git') {
//     console.log("Let's study Git!");
//   } else if (topics[randomTopic] === 'JavaScript') {
//     console.log("Let's study JavaScript!");
//   } else {
//     console.log('Please try again!');
//   }
// }

// console.log('Here are the topics we learned through Prework:')
// listTopics()
// console.log('Which topic should we study first?')
// selectTopic()



const accordions = Array.from(document.querySelectorAll('.card'))


accordions.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.card__header')
  const accordionContent = accordion.querySelector('.card__content')



    accordionHeader.addEventListener('click', event => {
      accordionContent.classList.toggle('card__content--open')
      // container.style.maxwidth = '1200px'
  })
})