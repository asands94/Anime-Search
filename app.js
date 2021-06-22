const searchResults = document.getElementById('search-results')
const searchImages = document.getElementById('search-images')
const form = document.getElementById('anime-search-form')
const bgImage = document.getElementById('main-image')
const bgImageTitle = document.getElementById('main-text')
const mainBorder = document.getElementById("main-border")

const animeSearch = async () => {
  try {
    let animeShowName = document.getElementById('search-shows').value
    document.getElementById('search-shows').value = ''
    const animeSearchURL = `https://api.jikan.moe/v3/search/anime?q=${animeShowName}&limit=4`
    const animeSearchResults = await axios.get(animeSearchURL)
    // console.log(animeSearchResults.data.results)
    const results = animeSearchResults.data.results
    
    searchResults.insertAdjacentHTML('afterbegin', "<h2>Search Results</h2>")
    
    for (let i = 0; i < results.length; i++) {
      // console.log(results[i].image_url)
      console.log(results[i].title)

      //Display search result names
      // let animeTitle = results[i].title
      // let animeTitleNames = document.createElement("h2")
      // animeTitleNames.textContent = animeTitle
      // searchResults.append(animeTitleNames)


    //Display search result names images

      let animeImageResults = results[i].image_url
      animeImage = document.createElement("img")
      animeImage.setAttribute("src", animeImageResults)
      animeImage.classList.add('limited-results')
      // searchImages.appendChild(animeImage)

      searchImages.insertAdjacentElement('beforeend', animeImage)
    }


    
  } catch (error) {
    console.error(error)
  }
}

const animeHeader = async () => {

  try {

    const animeHeaderURL = `https://api.jikan.moe/v3/search/anime?q=fruitsbasket&limit=4`
    const animeHeaderDisplay = await axios.get(animeHeaderURL)
    console.log(animeHeaderDisplay.data.results[2])
  
    let headerTitle = animeHeaderDisplay.data.results[2].title
    titleDisplay = document.createElement('h2')
    titleDisplay.classList.add('header-text')
    titleDisplay.textContent = headerTitle
    bgImageTitle.prepend(titleDisplay)

    let headerSyn = animeHeaderDisplay.data.results[2].synopsis
    synDisplay = document.createElement('p')
    synDisplay.classList.add('header-description')
    synDisplay.textContent = headerSyn
    bgImageTitle.append(synDisplay)

    let headerImage = animeHeaderDisplay.data.results[2].image_url
    const headerImg = document.createElement('img')
    headerImg.setAttribute('src', headerImage)
    headerImg.classList.add('bg-header-image')
    bgImage.append(headerImg)

    


    
  } catch (error) {
    console.error(error)
  }
}

animeHeader()

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

