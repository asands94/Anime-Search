const searchHeader = document.getElementById("search-header");
const searchTitles = document.getElementById("search-titles");
const searchImages = document.getElementById("search-images");

const mainHeader = document.getElementById("main-container")
const form = document.getElementById("anime-search-form");
const bgImage = document.getElementById("main-image");
const bgImageTitle = document.getElementById("main-text");
const mainBorder = document.getElementById("main-border");

const animeSearch = async () => {
  try {
    let animeShowName = document.getElementById("search-shows").value;
    document.getElementById("search-shows").value = "";
    const animeSearchURL = `https://api.jikan.moe/v3/search/anime?q=${animeShowName}&limit=24`;
    const animeSearchResults = await axios.get(animeSearchURL);
    const results = animeSearchResults.data.results;

    searchHeader.insertAdjacentHTML("afterbegin", "<h2>Search Results</h2>");
    searchHeader.classList.add("anime-search");

    for (let i = 0; i < results.length; i++) {
      console.log(results[i].image_url)
      console.log(results[i].url)

      // Create a div to append all the data to
      let imageDiv = document.createElement("div");
      searchImages.append(imageDiv);
      imageDiv.classList.add("image-title-div");

      // Create buttons to go ontop of images
      let animeButton = document.createElement("button");
      animeButton.classList.add("anime-button");
      animeButton.textContent = "Details";
      imageDiv.append(animeButton);

      // Display images
      let animeImageResults = results[i].image_url;
      let animeImage = document.createElement("img");
      animeImage.setAttribute("src", animeImageResults);
      animeImage.classList.add("anime-search-images");
      imageDiv.append(animeImage);

      // Create modal
      const modalContent = document.createElement("div")
      modalContent.classList.add('modal-content')
      mainHeader.append(modalContent)

      const modalBox = document.createElement("div")
      modalBox.classList.add('modal-box')
      modalContent.append(modalBox)

      const closeBtn = document.createElement("span")
      closeBtn.classList.add('close')
      closeBtn.textContent = 'x'
      modalBox.append(closeBtn)

      // Display titles in modal
      let animeTitle = results[i].title;
      let animeTitleNames = document.createElement("h2");
      animeTitleNames.textContent = animeTitle;
      modalBox.append(animeTitleNames);

      // Display synopsis in modal
      let synopsisResults = results[i].synopsis;
      let synopsis = document.createElement("p");
      synopsis.textContent = synopsisResults;
      modalBox.append(synopsis)

      // Display images in modal
      let animeImageResults2 = results[i].image_url;
      let animeImage2 = document.createElement("img");
      animeImage2.setAttribute("src", animeImageResults2);
      modalBox.append(animeImage2);
      
      
      // Event listeners
      animeButton.addEventListener('click', (e) => {
        e.preventDefault()
        modalContent.style.display = "block"

        closeBtn.addEventListener('click', () => {
          modalContent.style.display = 'none'
        })
      })

    }
  } catch (error) {
    console.error(error);
  }
};

const animeHeader = async () => {
  try {
    const animeHeaderURL = `https://api.jikan.moe/v3/search/anime?q=fruitsbasket&limit=4`;
    const animeHeaderDisplay = await axios.get(animeHeaderURL);

    let headerLink = animeHeaderDisplay.data.results[2].url;
    let headerTitle = animeHeaderDisplay.data.results[2].title;
    let titleDisplay = document.createElement("a");
    titleDisplay.classList.add("header-text");
    titleDisplay.setAttribute("href", headerLink);
    titleDisplay.textContent = headerTitle;
    bgImageTitle.prepend(titleDisplay);

    let headerSyn = animeHeaderDisplay.data.results[2].synopsis;
    let synDisplay = document.createElement("p");
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
    let seasonName = currentShows.data.season_name;

    let results = currentShows.data.anime;

    currentHeader.insertAdjacentHTML(
      "afterbegin",
      `<h2>${seasonName} Anime</h2>`
    );
    currentHeader.classList.add("anime-genres");

    for (let i = 0; i < results.length; i++) {

      // Create a div to append all the data to
      let currentAnimeDiv = document.createElement("div");
      currentImages.append(currentAnimeDiv);
      currentAnimeDiv.classList.add("image-title-div");

      // Create buttons to go ontop of images
      let animeButton = document.createElement("button");
      animeButton.classList.add("anime-button");
      animeButton.textContent = "Details";
      currentAnimeDiv.append(animeButton);

      // Display images
      let currentAnimeImageResults = results[i].image_url;
      let currentAnimeImage = document.createElement("img");
      currentAnimeImage.setAttribute("src", currentAnimeImageResults);
      currentAnimeImage.classList.add("anime-images");
      currentAnimeDiv.append(currentAnimeImage);

      // Create modal
      const modalContent = document.createElement("div")
      modalContent.classList.add('modal-content')
      mainHeader.append(modalContent)

      const modalBox = document.createElement("div")
      modalBox.classList.add('modal-box')
      modalContent.append(modalBox)

      const closeBtn = document.createElement("span")
      closeBtn.classList.add('close')
      closeBtn.textContent = 'x'
      modalBox.append(closeBtn)

      // Display titles in modal
      let currentAnimeTitle = results[i].title;
      let currentAnimeTitleNames = document.createElement("h2");
      currentAnimeTitleNames.textContent = currentAnimeTitle;
      modalBox.append(currentAnimeTitleNames);

      // Display synopsis in modal
      let synopsisResults = results[i].synopsis;
      let synopsis = document.createElement("p");
      synopsis.textContent = synopsisResults;
      modalBox.append(synopsis)

      // Display images in modal
      let currentAnimeImageResults2 = results[i].image_url;
      let currentAnimeImage2 = document.createElement("img");
      currentAnimeImage2.setAttribute("src", currentAnimeImageResults2);
      modalBox.append(currentAnimeImage2);
      
      // Event listeners
      animeButton.addEventListener('click', (e) => {
        e.preventDefault()
        modalContent.style.display = "block"

        closeBtn.addEventListener('click', () => {
          modalContent.style.display = 'none'
        })
      })

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

    let results = upcomingShows.data.anime;

    upcomingHeader.insertAdjacentHTML("afterbegin", `<h2>Upcoming Anime</h2>`);
    upcomingHeader.classList.add("anime-genres");

    for (let i = 0; i < results.length; i++) {

      // Create a div to append all the data to
      let upcomingAnimeDiv = document.createElement("div");
      upcomingImages.append(upcomingAnimeDiv);
      upcomingAnimeDiv.classList.add("image-title-div");

      // Create button to go ontop of images
      let animeButton = document.createElement("button");
      animeButton.classList.add("anime-button");
      animeButton.textContent = "Details";
      upcomingAnimeDiv.append(animeButton);

      // Display images
      let upcomingAnimeImageResults = results[i].image_url;
      let upcomingAnimeImage = document.createElement("img");
      upcomingAnimeImage.setAttribute("src", upcomingAnimeImageResults);
      upcomingAnimeImage.classList.add("anime-images");
      upcomingAnimeDiv.append(upcomingAnimeImage);

      // Create modal
      const modalContent = document.createElement("div")
      modalContent.classList.add('modal-content')
      mainHeader.append(modalContent)

      const modalBox = document.createElement("div")
      modalBox.classList.add('modal-box')
      modalContent.append(modalBox)

      const closeBtn = document.createElement("span")
      closeBtn.classList.add('close')
      closeBtn.textContent = 'x'
      modalBox.append(closeBtn)

      // Display titles in modal
      let upcomingAnimeTitle = `${results[i].title}`;
      let upcomingAnimeTitleNames = document.createElement("h2");
      upcomingAnimeTitleNames.textContent = upcomingAnimeTitle;
      modalBox.append(upcomingAnimeTitleNames);

      // Display synopsis in modal
      let synopsisResults = results[i].synopsis;
      let synopsis = document.createElement("p");
      synopsis.textContent = synopsisResults;
      modalBox.append(synopsis)

      // Display images in modal
      let upcomingAnimeImageResults2 = results[i].image_url;
      let upcomingAnimeImage2 = document.createElement("img");
      upcomingAnimeImage2.setAttribute("src", upcomingAnimeImageResults2);
      modalBox.append(upcomingAnimeImage2);

     // Event listeners
     animeButton.addEventListener('click', (e) => {
      e.preventDefault()
      modalContent.style.display = "block"

      closeBtn.addEventListener('click', () => {
        modalContent.style.display = 'none'
      })
    })

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
    let actionGenreName = actionGenre.data.mal_url.name;

    let results = actionGenre.data.anime;

    actionHeader.insertAdjacentHTML(
      "afterbegin",
      `<h2>${actionGenreName}</h2>`
    );
    actionHeader.classList.add("anime-genres");

    for (let i = 0; i < results.length; i++) {

       // Create a div to append all the data to
       let actionAnimeDiv = document.createElement("div");
       actionImages.append(actionAnimeDiv);
       actionAnimeDiv.classList.add("image-title-div");
 
       // Create button to go ontop of images
       let animeButton = document.createElement("button");
       animeButton.classList.add("anime-button");
       animeButton.textContent = "Details";
       actionAnimeDiv.append(animeButton);
 
       // Display images
       let actionAnimeImageResults = results[i].image_url;
       let actionAnimeImage = document.createElement("img");
       actionAnimeImage.setAttribute("src", actionAnimeImageResults);
       actionAnimeImage.classList.add("anime-images");
       actionAnimeDiv.append(actionAnimeImage);
 
       // Create modal
       const modalContent = document.createElement("div")
       modalContent.classList.add('modal-content')
       mainHeader.append(modalContent)
 
       const modalBox = document.createElement("div")
       modalBox.classList.add('modal-box')
       modalContent.append(modalBox)
 
       const closeBtn = document.createElement("span")
       closeBtn.classList.add('close')
       closeBtn.textContent = 'x'
       modalBox.append(closeBtn)
 
       // Display titles in modal
       let actionAnimeTitle = `${results[i].title}`;
       let actionAnimeTitleNames = document.createElement("h2");
       actionAnimeTitleNames.textContent = actionAnimeTitle;
       modalBox.append(actionAnimeTitleNames);
 
       // Display synopsis in modal
       let synopsisResults = results[i].synopsis;
       let synopsis = document.createElement("p");
       synopsis.textContent = synopsisResults;
       modalBox.append(synopsis)
 
       // Display images in modal
       let actionAnimeImageResults2 = results[i].image_url;
       let actionAnimeImage2 = document.createElement("img");
       actionAnimeImage2.setAttribute("src", actionAnimeImageResults2);
       modalBox.append(actionAnimeImage2);
 
      // Event listeners
      animeButton.addEventListener('click', (e) => {
       e.preventDefault()
       modalContent.style.display = "block"
 
       closeBtn.addEventListener('click', () => {
         modalContent.style.display = 'none'
       })
      })
      
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
    let fantasyGenreName = fantasyGenre.data.mal_url.name;

    let results = fantasyGenre.data.anime;

    fantasyHeader.insertAdjacentHTML(
      "afterbegin",
      `<h2>${fantasyGenreName}</h2>`
    );
    fantasyHeader.classList.add("anime-genres");

    for (let i = 0; i < results.length; i++) {

      // Create a div to append all the data to
      let fantasyAnimeDiv = document.createElement("div");
      fantasyImages.append(fantasyAnimeDiv);
      fantasyAnimeDiv.classList.add("image-title-div");

      // Create button to go ontop of images
      let animeButton = document.createElement("button");
      animeButton.classList.add("anime-button");
      animeButton.textContent = "Details";
      fantasyAnimeDiv.append(animeButton);

      // Display images
      let fantasyAnimeImageResults = results[i].image_url;
      let fantasyAnimeImage = document.createElement("img");
      fantasyAnimeImage.setAttribute("src", fantasyAnimeImageResults);
      fantasyAnimeImage.classList.add("anime-images");
      fantasyAnimeDiv.append(fantasyAnimeImage);

      // Create modal
      const modalContent = document.createElement("div")
      modalContent.classList.add('modal-content')
      mainHeader.append(modalContent)

      const modalBox = document.createElement("div")
      modalBox.classList.add('modal-box')
      modalContent.append(modalBox)

      const closeBtn = document.createElement("span")
      closeBtn.classList.add('close')
      closeBtn.textContent = 'x'
      modalBox.append(closeBtn)

      // Display titles in modal
      let fantasyAnimeTitle = `${results[i].title}`;
      let fantasyAnimeTitleNames = document.createElement("h2");
      fantasyAnimeTitleNames.textContent = fantasyAnimeTitle;
      modalBox.append(fantasyAnimeTitleNames);

      // Display synopsis in modal
      let synopsisResults = results[i].synopsis;
      let synopsis = document.createElement("p");
      synopsis.textContent = synopsisResults;
      modalBox.append(synopsis)

      // Display images in modal
      let fantasyAnimeImageResults2 = results[i].image_url;
      let fantasyAnimeImage2 = document.createElement("img");
      fantasyAnimeImage2.setAttribute("src", fantasyAnimeImageResults2);
      modalBox.append(fantasyAnimeImage2);

     // Event listeners
     animeButton.addEventListener('click', (e) => {
      e.preventDefault()
      modalContent.style.display = "block"

      closeBtn.addEventListener('click', () => {
        modalContent.style.display = 'none'
      })
     })
     
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
    let romanceGenreName = romanceGenre.data.mal_url.name;

    let results = romanceGenre.data.anime;

    romanceHeader.insertAdjacentHTML(
      "afterbegin",
      `<h2>${romanceGenreName}</h2>`
    );
    romanceHeader.classList.add("anime-genres");

    for (let i = 0; i < results.length; i++) {

      // Create a div to append all the data to
      let romanceAnimeDiv = document.createElement("div");
      romanceImages.append(romanceAnimeDiv);
      romanceAnimeDiv.classList.add("image-title-div");

      // Create button to go ontop of images
      let animeButton = document.createElement("button");
      animeButton.classList.add("anime-button");
      animeButton.textContent = "Details";
      romanceAnimeDiv.append(animeButton);

      // Display images
      let romanceAnimeImageResults = results[i].image_url;
      let romanceAnimeImage = document.createElement("img");
      romanceAnimeImage.setAttribute("src", romanceAnimeImageResults);
      romanceAnimeImage.classList.add("anime-images");
      romanceAnimeDiv.append(romanceAnimeImage);

      // Create modal
      const modalContent = document.createElement("div")
      modalContent.classList.add('modal-content')
      mainHeader.append(modalContent)

      const modalBox = document.createElement("div")
      modalBox.classList.add('modal-box')
      modalContent.append(modalBox)

      const closeBtn = document.createElement("span")
      closeBtn.classList.add('close')
      closeBtn.textContent = 'x'
      modalBox.append(closeBtn)

      // Display titles in modal
      let romanceAnimeTitle = `${results[i].title}`;
      let romanceAnimeTitleNames = document.createElement("h2");
      romanceAnimeTitleNames.textContent = romanceAnimeTitle;
      modalBox.append(romanceAnimeTitleNames);

      // Display synopsis in modal
      let synopsisResults = results[i].synopsis;
      let synopsis = document.createElement("p");
      synopsis.textContent = synopsisResults;
      modalBox.append(synopsis)

      // Display images in modal
      let romanceAnimeImageResults2 = results[i].image_url;
      let romanceAnimeImage2 = document.createElement("img");
      romanceAnimeImage2.setAttribute("src", romanceAnimeImageResults2);
      modalBox.append(romanceAnimeImage2);

     // Event listeners
     animeButton.addEventListener('click', (e) => {
      e.preventDefault()
      modalContent.style.display = "block"

      closeBtn.addEventListener('click', () => {
        modalContent.style.display = 'none'
      })
     })
      
    }
  } catch (error) {
    console.error(error);
  }
};

romanceGenre();

const banner = document.getElementById("banner-container")
const bannerText = document.getElementById("banner-text")
const bannerImage = document.getElementById("banner-image")

const middleBanner = async () => {
  try {
    const middleBannerURL = `https://api.jikan.moe/v3/top/anime/1/upcoming`;
    const middleBannerDisplay = await axios.get(middleBannerURL);
    
    let results = middleBannerDisplay.data.top
    
      // Display images
      let bannerImgResults = results[0].image_url
      let bannerImg = document.createElement("img");
      bannerImg.setAttribute("src", bannerImgResults);
      bannerImg.classList.add("banner-image");
      bannerImage.append(bannerImg);

      // Display text
      let bannerTitle = results[0].title
      let bannerTitleDisplay = document.createElement("a");
      bannerTitleDisplay.classList.add("banner-text");
      bannerTitleDisplay.textContent = bannerTitle
      bannerTitleDisplay.setAttribute("href", results[0].url)
      bannerText.append(bannerTitleDisplay);

      let bannerDate = results[0].start_date
      let dateDisplay = document.createElement("p");
      dateDisplay.classList.add("banner-description");
      dateDisplay.textContent = `Coming: ${bannerDate}`;
      bannerText.append(dateDisplay);


  } catch (error) {
    console.error(error);
  }
};
middleBanner();




// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  removeSearchWord();
  removeSearchRImages();
  animeSearch();
  setTimeout(scrollToSearch, 250);
});

const toTop = document.getElementById("back-up");
toTop.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToTop();
});

//Functions
const removeSearchWord = () => {
  while (searchHeader.lastChild) {
    searchHeader.removeChild(searchHeader.lastChild);
  }
}

const removeSearchRImages = () => {
  while (searchImages.lastChild) {
    searchImages.removeChild(searchImages.lastChild);
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToSearch = () => {
  scrollDown = document.getElementById("footer")
  scrollDown.scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
}
