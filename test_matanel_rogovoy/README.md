
# Matanel rogovoy - web dev

The Movie App is a web application that allows users to explore and interact with a collection of movies. It consists of three main pages: Main, BuyTicket, and Lists.

Main Page -
The Main Page serves as the homepage of the Movie App. It provides an overview of all the available movies, allowing users to browse through them. Users can view movie posters, titles, and brief descriptions to get an idea of what each movie is about.

BuyTicket Page -
The BuyTicket Page provides in-depth information about a selected movie. When a user clicks on a movie from the Main Page, they are redirected to the BuyTicket Page for that particular movie. Here, users can find detailed information such as trailer and relese date. The BuyTicket Page also enables users to purchase tickets for the movie.

Lists Page -
The Lists Page allows users to manage their watch history and favorites. users can view a list of movies they have watched and a separate list of their favorite movies. This page helps users keep track of the movies they have seen and easily access their favorite movies for future reference.






## API Reference

#### Get all movies

```http
  GET https://api.themoviedb.org/3/discover/movie?api_key=<YOUR_API_KEY>&page=<PAGE_NUMBER>

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key
|`page`     |`number`  | **Required**. page of movie *default* =1 *max* = 500

#### Get movie and videos

```http
  GET https://api.themoviedb.org/3/movie/<MOVIE_ID>?api_key=<YOUR_API_KEY>&append_to_response=videos

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |
| `api_key` | `string` | **Required**. Your API key


Takes two numbers and returns the sum.


## Tech Stack

**Client:** React, typescript , matireals ui


