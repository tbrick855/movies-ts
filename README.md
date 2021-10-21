# Movie list - typescript

## Local Setup

### `yarn install`

### Get api key from interviewer

Create a `.env.local` file with your api key

```
REACT_APP_API_KEY=your_api_key
```

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Routes

There are 2 main routes to the S app:

1. Root `/`: This should display a list of movies available

   - Create type interface for movie list

   - Call api to get movies

   - Display the movie Poster, Title, Year

   - Sort by Year

2. Movie detail `/movie/${id}`: This displays details of the movie that matches `id`

   - Display several available fields for the matching movie
   - Title
   - Director
   - Actors
   - Plot

## Folders

1. `src` - Contains the react app
2. `src\api.ts` - Contains axios functions to get movieList and movieDetail
3. `src\components` - Contains react components MovieList and MovieDetail

## API - http://www.omdbapi.com/ - open movie database

### search by subject

`http://www.omdbapi.com/?s=${subject}&apikey=${xxxxxx}`

### response

```
"Search": [
        {
            "Title": "Batman Begins",
            "Year": "2005",
            "imdbID": "tt0372784",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        }
    ]
}
```

### search by id

`http://www.omdbapi.com/?i=${imdbID}&apikey=xxxxxx`

### response

```
{
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane, David S. Goyer, Christopher Nolan",
    "Actors": "Christian Bale, Michael Caine, Ken Watanabe",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    "Language": "English, Mandarin",
    "Country": "United Kingdom, United States",
    "Awards": "Nominated for 1 Oscar. 13 wins & 79 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.2/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "84%"
        },
        {
            "Source": "Metacritic",
            "Value": "70/100"
        }
    ],
    "Metascore": "70",
    "imdbRating": "8.2",
    "imdbVotes": "1,362,365",
    "imdbID": "tt0372784",
    "Type": "movie",
    "DVD": "18 Oct 2005",
    "BoxOffice": "$206,852,432",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}
```
