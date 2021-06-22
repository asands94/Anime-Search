const searchResults = document.getElementById('search-results')
const form = document.getElementById('anime-search-form')

const animeSearch = async () => {
  try {
    let animeShowName = document.getElementById('search-shows').value
    document.getElementById('search-shows').value = ''
    const animeSearchURL = `https://api.jikan.moe/v3/search/anime?q=${animeShowName}`
    const animeSearchResults = await axios.get(animeSearchURL)
    // console.log(animeSearchResults.data.results)
    const results = animeSearchResults.data.results

    for (let i = 0; i < results.length; i++) {
      // console.log(results[i].image_url)
      console.log(results[i].title)

      //Display search result names
      let animeTitle = results[i].title
      animeTitleNames = document.createElement("h2")
      animeTitleNames.textContent = animeTitle
      searchResults.append(animeTitleNames)


    //Display search result names images
      let animeImageResults = results[i].image_url
      animeImage = document.createElement("img")
      animeImage.setAttribute("src", animeImageResults)
      searchResults.append(animeImage)
    }


    
  } catch (error) {
    console.log(error)
  }
}

animeSearch()

form.addEventListener('submit', (e) => {
  e.preventDefault()
  removeSearchResults()
  animeSearch()
})

function removeSearchResults() {
  while (searchResults.lastChild) {
  searchResults.removeChild(searchResults.lastChild)
  }
}
