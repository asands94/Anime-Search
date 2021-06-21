# Project Overview

## Anime+

[Deployed Project](URL)

## Project Description

This project allows for users to search for anime. The project will append an image, title, and description of the anime show the user searches for. 

## API and Data Sample

I am using the Jikan API which pulls data from MyAnimeList and gives data on anime and manga. [Jikan](https://jikan.docs.apiary.io/#)

```
{
    "request_hash": "request:anime:c8a5be55579a0147b5c455245461fe69a7347e1b",
    "request_cached": true,
    "request_cache_expiry": 82064,
    "episodes_last_page": 1,
    "episodes": [
        {
            "episode_id": 1,
            "title": "Asteroid Blues",
            "title_japanese": "アステロイド・ブルース",
            "title_romanji": "Asteroid Blues ",
            "aired": "1998-10-24T00:00:00+00:00",
            "filler": false,
            "recap": false,
            "video_url": "https://myanimelist.net/anime/1/Cowboy_Bebop/episode/1",
            "forum_url": "https://myanimelist.net/forum/?topicid=29264"
        }

## Wireframes

![Wireframe](https://i.imgur.com/JouFioF.png)

### MVP/PostMVP

#### MVP 

- Allow user to search with a form input to find information about different anime 
- Render image, title, and description based on the search results 
- Show anime airing that week
- Have dynamic header image that showcases most popular anime at the time

#### PostMVP  

- Display list of popular anime on the page that are clickable and bring user to information page
- Display upcoming anime that has been announced
- Display different genres
- Create image carousel in header that displays popular anime characters as well as most popular anime show at the moment
- Let user add anime to a "watch later" list

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|June 22| Project Approval / HTML Boilerplate / JS part of input form completed & appended items showing up | Incomplete
|June 23| Add current anime airing for the week / Style the page in CSS based on wireframe | Incomplete
|June 24| Initial Clickable Model / Additional CSS: hover effects,  animations / work on mobile UI  | Incomplete
|June 25| MVP | Incomplete
|June 28| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://i.imgur.com/CQXfcIZ.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create functional form | H |2hr|  |  |
| Format form information using CSS | H | 3hrs|  |  |
| Create currently airing anime section | H | 4hrs|  |  |
| Add top anime to header and format header section | H | 3hrs|  |  |
| Add hover effects for the images | L | 3hrs| |  |
| Go through all data I want to display for the anime | H | 2hrs| |  |
| query for mobile | H | 3hrs|  |  |
| Format general website (background, footer) | H | 3hrs|  |  |
| Testing out information taken from API (image sizes, kinds of information, search functionality) | H | 3hrs|  |  |
| Add image carousel | L | 5hrs|  |  |
| Add links at top of page that go to different sections | L | 1hrs|  |  |
| add go go back up top of the page button | L | 2hrs|  |  |
| create watch later list | L | 4hrs|  |  |
| Total |  | 38hrs|  |  |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
