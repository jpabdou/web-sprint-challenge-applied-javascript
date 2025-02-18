const Header = (title, date, temp) => {
  const headerDiv = document.createElement("div")
  headerDiv.className = "header"

  const spanDate = document.createElement("span")
  spanDate.className = "date"
  spanDate.textContent = `${date}`

  const titleH1 = document.createElement("h1")
  titleH1.textContent = `${title}`


  const spanTemp = document.createElement("span")
  spanTemp.className = "temp"
  spanTemp.textContent = `${temp}`

  headerDiv.appendChild(spanDate)
  headerDiv.appendChild(titleH1)
  headerDiv.appendChild(spanTemp)

  return headerDiv
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const headerWrapper = document.querySelector(selector)
  headerWrapper.appendChild(Header("The John Abdou Daily", "9-19-2022", "Temp???"))
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
