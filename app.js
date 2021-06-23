const searchHeader = document.getElementById('search-header')
const searchTitles = document.getElementById('search-titles')
const searchImages = document.getElementById('search-images')
const form = document.getElementById('anime-search-form')
const bgImage = document.getElementById('main-image')
const bgImageTitle = document.getElementById('main-text')
const mainBorder = document.getElementById("main-border")

const animeSearch = async () => {
  try {
    let animeShowName = document.getElementById('search-shows').value
    document.getElementById('search-shows').value = ''
    const animeSearchURL = `https://api.jikan.moe/v3/search/anime?q=${animeShowName}&limit=24`
    const animeSearchResults = await axios.get(animeSearchURL)
    // console.log(animeSearchResults.data.results)
    const results = animeSearchResults.data.results
    
    searchHeader.insertAdjacentHTML('afterbegin', "<h2>Search Results</h2>")
    searchHeader.classList.add("popup-search")
    
    for (let i = 0; i < results.length; i++) {
      // console.log(results[i].image_url)
      // console.log(results[i].url)
      
      
      let imageDiv = document.createElement('div')
      searchImages.append(imageDiv)
      imageDiv.classList.add("image-div")

      //Display search result names
      let link = results[i].url
      let animeTitle = `${results[i].title}`
      let length = 10
      let trimmedAnimeTitle = `${animeTitle.substring(0, length)}...`
      let animeTitleNames = document.createElement("a")
      animeTitleNames.classList.add('search-result-titles')
      animeTitleNames.setAttribute("href", link)
      animeTitleNames.textContent = trimmedAnimeTitle
      imageDiv.append(animeTitleNames)

      //Display search result images
      let animeImageResults = results[i].image_url
      let animeImage = document.createElement("img")
      animeImage.setAttribute("src", animeImageResults)
      animeImage.classList.add('image-results')
      imageDiv.append(animeImage)

      
      
      
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
  // removeSearchTitles()
  removeSearchRImages()
  animeSearch()
})

function removeSearchTitles() {
  while (searchTitles.lastChild) {
  searchTitles.removeChild(searchTitles.lastChild)
  }
}

function removeSearchRImages() {
  while (searchImages.lastChild) {
  searchImages.removeChild(searchImages.lastChild)
  }
}

