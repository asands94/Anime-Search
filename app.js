const searchHeader = document.getElementById("search-header");
const searchTitles = document.getElementById("search-titles");
const searchImages = document.getElementById("search-images");

const form = document.getElementById("anime-search-form");
const bgImage = document.getElementById("main-image");
const bgImageTitle = document.getElementById("main-text");
const mainBorder = document.getElementById("main-border");

const animeSearch = async () => {
  try {
    let animeShowName = document.getElementById("search-shows").value;
    document.getElementById("search-shows").value = "";
    const animeSearchURL = `https://api.jikan.moe/v3/search/anime?q=${animeShowName}&limit=27`;
    const animeSearchResults = await axios.get(animeSearchURL);
    // console.log(animeSearchResults.data.results)
    const results = animeSearchResults.data.results;

    searchHeader.insertAdjacentHTML("afterbegin", "<h2>Search Results</h2>");
    searchHeader.classList.add("anime-search");

    for (let i = 0; i < results.length; i++) {
      // console.log(results[i].image_url)
      // console.log(results[i].url)

      let imageDiv = document.createElement("div");
      searchImages.append(imageDiv);
      imageDiv.classList.add("image-title-div");

      //Display search result names
      let link = results[i].url;
      let animeTitle = `${results[i].title}`;
      let length = 10;
      let trimmedAnimeTitle = `${animeTitle.substring(0, length)}...`;
      let animeTitleNames = document.createElement("a");
      animeTitleNames.classList.add("anime-titles");
      animeTitleNames.setAttribute("href", link);
      animeTitleNames.textContent = trimmedAnimeTitle;
      imageDiv.append(animeTitleNames);

      //Display search result images
      let animeButton = document.createElement("button");
      animeButton.classList.add("anime-button");
      animeButton.textContent = "Details";
      imageDiv.append(animeButton);
      let animeImageResults = results[i].image_url;
      let animeImage = document.createElement("img");
      animeImage.setAttribute("src", animeImageResults);
      animeImage.classList.add("anime-search-images");
      imageDiv.append(animeImage);
    }
  } catch (error) {
    console.error(error);
  }
};

const animeHeader = async () => {
  try {
    const animeHeaderURL = `https://api.jikan.moe/v3/search/anime?q=fruitsbasket&limit=4`;
    const animeHeaderDisplay = await axios.get(animeHeaderURL);
    // console.log(animeHeaderDisplay.data.results[2].url)

    let headerLink = animeHeaderDisplay.data.results[2].url;
    let headerTitle = animeHeaderDisplay.data.results[2].title;
    titleDisplay = document.createElement("a");
    titleDisplay.classList.add("header-text");
    titleDisplay.setAttribute("href", headerLink);
    titleDisplay.textContent = headerTitle;
    bgImageTitle.prepend(titleDisplay);

    let headerSyn = animeHeaderDisplay.data.results[2].synopsis;
    synDisplay = document.createElement("p");
    synDisplay.classList.add("header-description");
    synDisplay.textContent = headerSyn;
    bgImageTitle.append(synDisplay);

    let headerImage = animeHeaderDisplay.data.results[2].image_url;
    const headerImg = document.createElement("img");
    headerImg.setAttribute("src", headerImage);
    headerImg.classList.add("bg-header-image");
    bgImage.append(headerImg);
  } catch (error) {
    console.error(error);
  }
};
animeHeader();

const currentHeader = document.getElementById("current-header");
const currentImages = document.getElementById("current-images");

const currentAnime = async () => {
  try {
    const currentAnimeURL = `https://api.jikan.moe/v3/season`;
    const currentShows = await axios.get(currentAnimeURL);
    // console.log(currentShows.data.anime)
    let seasonName = currentShows.data.season_name;

    let results = currentShows.data.anime;

    currentHeader.insertAdjacentHTML(
      "afterbegin",
      `<h2>${seasonName} Anime</h2>`
    );
    currentHeader.classList.add("anime-genres");

    for (let i = 0; i < results.length; i++) {
      // console.log(results[i].synopsis);

      let currentAnimeDiv = document.createElement("div");
      currentImages.append(currentAnimeDiv);
      currentAnimeDiv.classList.add("image-title-div");

      //Display names
      let link = results[i].url;
      let currentAnimeTitle = `${results[i].title}`;
      // let length = 50;
      // let trimmedAnimeTitle = `${currentAnimeTitle.substring(0, length)}`;
      let currentAnimeTitleNames = document.createElement("p");
      currentAnimeTitleNames.classList.add("anime-titles");
      // currentAnimeTitleNames.setAttribute("href", link);
      currentAnimeTitleNames.textContent = currentAnimeTitle;
      currentAnimeDiv.append(currentAnimeTitleNames);

      //Display images
      let animeButton = document.createElement("button");
      animeButton.classList.add("anime-button");
      animeButton.textContent = "Details";
      currentAnimeDiv.append(animeButton);
      let currentAnimeImageResults = results[i].image_url;
      let currentAnimeImage = document.createElement("img");
      currentAnimeImage.setAttribute("src", currentAnimeImageResults);
      currentAnimeImage.classList.add("anime-images");
      currentAnimeDiv.append(currentAnimeImage);

      // Display synopsis
      let synopsisResults = results[i].synopsis;
      synopsis = document.createElement("p");
      synopsis.textContent = synopsisResults;
      synopsis.classList.add('modal')
      // currentAnimeDiv.append(synopsis)

      // animeButton.addEventListener('click', () => {
      //   // e.preventDefault()
      //   currentAnimeImage.style.display = 'none'
      // })


    }
  } catch (error) {
    console.error(error);
  }
};

currentAnime();

const upcomingHeader = document.getElementById("upcoming-header");
const upcomingImages = document.getElementById("upcoming-images");

const upcomingAnime = async () => {
  try {
    const upcomingAnimeURL = `https://api.jikan.moe/v3/season/later`;
    const upcomingShows = await axios.get(upcomingAnimeURL);
    // console.log(upcomingShows.data.anime)
    let upcomingName = upcomingShows.data.season_name;

    let results = upcomingShows.data.anime;

    upcomingHeader.insertAdjacentHTML("afterbegin", `<h2>Upcoming Anime</h2>`);
    upcomingHeader.classList.add("anime-genres");

    for (let i = 0; i < results.length; i++) {
      // console.log(results[i].title)

      let upcomingAnimeDiv = document.createElement("div");
      upcomingImages.append(upcomingAnimeDiv);
      upcomingAnimeDiv.classList.add("image-title-div");

      //Display search result names
      let link = results[i].url;
      let upcomingAnimeTitle = `${results[i].title}`;
      // let length = 10;
      // let trimmedAnimeTitle = `${upcomingAnimeTitle.substring(0, length)}...`;
      let upcomingAnimeTitleNames = document.createElement("p");
      upcomingAnimeTitleNames.classList.add("anime-titles");
      // upcomingAnimeTitleNames.setAttribute("href", link);
      upcomingAnimeTitleNames.textContent = upcomingAnimeTitle;
      upcomingAnimeDiv.append(upcomingAnimeTitleNames);

      //Display search result images
      let animeButton = document.createElement("button");
      animeButton.classList.add("anime-button");
      animeButton.textContent = "Details";
      upcomingAnimeDiv.append(animeButton);
      let upcomingAnimeImageResults = results[i].image_url;
      let upcomingAnimeImage = document.createElement("img");
      upcomingAnimeImage.setAttribute("src", upcomingAnimeImageResults);
      upcomingAnimeImage.classList.add("anime-images");
      upcomingAnimeDiv.append(upcomingAnimeImage);
    }
  } catch (error) {
    console.error(error);
  }
};

upcomingAnime();

const actionHeader = document.getElementById("action-header");
const actionImages = document.getElementById("action-images");

const actionGenre = async () => {
  try {
    const actionGenreURL = `https://api.jikan.moe/v3/genre/anime/1`;
    const actionGenre = await axios.get(actionGenreURL);
    // console.log(actionGenre.data.mal_url.name);
    let actionGenreName = actionGenre.data.mal_url.name;

    let results = actionGenre.data.anime;

    actionHeader.insertAdjacentHTML(
      "afterbegin",
      `<h2>${actionGenreName}</h2>`
    );
    actionHeader.classList.add("anime-genres");

    for (let i = 0; i < results.length; i++) {
      // console.log(results[i].title)

      let actionAnimeDiv = document.createElement("div");
      actionImages.append(actionAnimeDiv);
      actionAnimeDiv.classList.add("image-title-div");

      //Display search result names
      let link = results[i].url;
      let actionAnimeTitle = `${results[i].title}`;
      // let length = 10;
      // let trimmedAnimeTitle = `${actionAnimeTitle.substring(0, length)}...`;
      let actionAnimeTitleNames = document.createElement("p");
      actionAnimeTitleNames.classList.add("anime-titles");
      // actionAnimeTitleNames.setAttribute("href", link);
      actionAnimeTitleNames.textContent = actionAnimeTitle;
      actionAnimeDiv.append(actionAnimeTitleNames);

      //Display search result images
      let animeButton = document.createElement("button");
      animeButton.classList.add("anime-button");
      animeButton.textContent = "Details";
      actionAnimeDiv.append(animeButton);
      let actionAnimeImageResults = results[i].image_url;
      let actionAnimeImage = document.createElement("img");
      actionAnimeImage.setAttribute("src", actionAnimeImageResults);
      actionAnimeImage.classList.add("anime-images");
      actionAnimeDiv.append(actionAnimeImage);
    }
  } catch (error) {
    console.error(error);
  }
};

actionGenre();

const fantasyHeader = document.getElementById("fantasy-header");
const fantasyImages = document.getElementById("fantasy-images");

const fantasyGenre = async () => {
  try {
    const fantasyGenreURL = `https://api.jikan.moe/v3/genre/anime/10`;
    const fantasyGenre = await axios.get(fantasyGenreURL);
    // console.log(fantasyGenre.data.mal_url.name);
    let fantasyGenreName = fantasyGenre.data.mal_url.name;

    let results = fantasyGenre.data.anime;

    fantasyHeader.insertAdjacentHTML(
      "afterbegin",
      `<h2>${fantasyGenreName}</h2>`
    );
    fantasyHeader.classList.add("anime-genres");

    for (let i = 0; i < results.length; i++) {
      // console.log(results[i].title)

      let fantasyAnimeDiv = document.createElement("div");
      fantasyImages.append(fantasyAnimeDiv);
      fantasyAnimeDiv.classList.add("image-title-div");

      //Display search result names
      let link = results[i].url;
      let fantasyAnimeTitle = `${results[i].title}`;
      // let length = 10;
      // let trimmedAnimeTitle = `${fantasyAnimeTitle.substring(0, length)}...`;
      let fantasyAnimeTitleNames = document.createElement("p");
      fantasyAnimeTitleNames.classList.add("anime-titles");
      fantasyAnimeTitleNames.setAttribute("href", link);
      fantasyAnimeTitleNames.textContent = fantasyAnimeTitle;
      fantasyAnimeDiv.append(fantasyAnimeTitleNames);

      //Display search result images
      let animeButton = document.createElement("button");
      animeButton.classList.add("anime-button");
      animeButton.textContent = "Details";
      fantasyAnimeDiv.append(animeButton);
      let fantasyAnimeImageResults = results[i].image_url;
      let fantasyAnimeImage = document.createElement("img");
      fantasyAnimeImage.setAttribute("src", fantasyAnimeImageResults);
      fantasyAnimeImage.classList.add("anime-images");
      fantasyAnimeDiv.append(fantasyAnimeImage);
    }
  } catch (error) {
    console.error(error);
  }
};

fantasyGenre();

const romanceHeader = document.getElementById("romance-header");
const romanceImages = document.getElementById("romance-images");

const romanceGenre = async () => {
  try {
    const romanceGenreURL = `https://api.jikan.moe/v3/genre/anime/22`;
    const romanceGenre = await axios.get(romanceGenreURL);
    // console.log(romanceGenre.data);
    let romanceGenreName = romanceGenre.data.mal_url.name;

    let results = romanceGenre.data.anime;

    romanceHeader.insertAdjacentHTML(
      "afterbegin",
      `<h2>${romanceGenreName}</h2>`
    );
    romanceHeader.classList.add("anime-genres");

    for (let i = 0; i < results.length; i++) {
      // console.log(results[i].title)

      let romanceAnimeDiv = document.createElement("div");
      romanceImages.append(romanceAnimeDiv);
      romanceAnimeDiv.classList.add("image-title-div");

      //Display search result names
      let link = results[i].url;
      let romanceAnimeTitle = `${results[i].title}`;
      // let length = 10;
      // let trimmedAnimeTitle = `${romanceAnimeTitle.substring(0, length)}...`;
      let romanceAnimeTitleNames = document.createElement("p");
      romanceAnimeTitleNames.classList.add("anime-titles");
      // romanceAnimeTitleNames.setAttribute("href", link);
      romanceAnimeTitleNames.textContent = romanceAnimeTitle;
      romanceAnimeDiv.append(romanceAnimeTitleNames);

      //Display search result images
      let animeButton = document.createElement("button");
      animeButton.classList.add("anime-button");
      animeButton.textContent = "Details";
      romanceAnimeDiv.append(animeButton);
      let romanceAnimeImageResults = results[i].image_url;
      let romanceAnimeImage = document.createElement("img");
      romanceAnimeImage.setAttribute("src", romanceAnimeImageResults);
      romanceAnimeImage.classList.add("anime-images");
      romanceAnimeDiv.append(romanceAnimeImage);
    }
  } catch (error) {
    console.error(error);
  }
};

romanceGenre();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document
    .getElementById("footer")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
  removeSearchWord();
  removeSearchRImages();
  animeSearch();
  // document.getElementById("search-header").scrollIntoView(true);
});

function removeSearchWord() {
  while (searchHeader.lastChild) {
    searchHeader.removeChild(searchHeader.lastChild);
  }
}

function removeSearchRImages() {
  while (searchImages.lastChild) {
    searchImages.removeChild(searchImages.lastChild);
  }
}

const toTop = document.getElementById("back-up");

toTop.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToTop();
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
