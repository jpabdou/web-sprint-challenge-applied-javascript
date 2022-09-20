import axios from "axios";
import { Card } from './card';

/* got bored and decided to implement a filtering feature into the tabs to show articles from the API call with a designation that matches the tab topic*/
const cardAppenderFilter = (selector, filterTerm) => {
  const cardTgt = document.querySelector(selector)
  cardTgt.textContent = ""
  axios('http://localhost:5001/api/articles')
    .then(res=> {
      const articles = Object.entries(res.data.articles).filter((element) => element[0].includes(filterTerm))
      articles.forEach(element => element[1].forEach(
        card=> {
          cardTgt.appendChild(Card(card))
        })
      )
      }) .catch(err => {
      console.log(err)
    })
  }

const Tabs = (topics) => {
  const topicsDiv = document.createElement("div")
  topicsDiv.className = "topics"
  topics.forEach(element => {
    const topicName = element
    const tabDiv = document.createElement("div")
    tabDiv.className = "tab"
    tabDiv.textContent = `${topicName}`
    tabDiv.addEventListener("click", ()=> {
      cardAppenderFilter('.cards-container', topicName.slice(0,3)) /* string slice to account for the "node" in "node.js" when filtering the Articles array */


    }) 
    topicsDiv.appendChild(tabDiv)
  });

  return topicsDiv
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  const tabsWrapper = document.querySelector(selector)
  axios('http://localhost:5001/api/topics')
    .then(res => {
      const resultsArr = res.data.topics
      tabsWrapper.appendChild(Tabs(resultsArr))

    }) .catch(err => {
      console.log(err)
    }) 
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
