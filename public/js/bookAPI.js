async function bookSearch(event){
    // prevents button from auto clicking on page load
    event.preventDefault()
    //add search input value here
    const book = document.querySelector("#search-input").value
    console.log(book)
    fetch(`https://openlibrary.org/search.json?q=${book}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.docs.length - 95; i++){
            console.log(data.docs[i])
        }
      });
}

document.querySelector("#search-btn") 
.addEventListener("click", bookSearch)