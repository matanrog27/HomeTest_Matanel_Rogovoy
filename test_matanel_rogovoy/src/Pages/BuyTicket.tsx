import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import Main from './Main';
import { type } from 'os';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { MovieContext } from '../Components/MovieContext';
import { WatchedMovie, LikedMovie, MovieContextType } from '../Types/MovieContextTypes';
import styled from '@emotion/styled';
import  '../style/MainPagestyle.css';

type movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: {
    results: {
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      key: string;
      published_at: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
      id: string;
    }[];
  };
}


function BuyTicket() {

  const urlPrefix = "https://image.tmdb.org/t/p/original"
  const params = useParams();
  const id = params.movieId;
  const [movie, setmovie] = useState<movie | null>(null)
  const [movieId, setmovieId] = useState<number>(0)
  const { AddWatched, watched } = useContext(MovieContext) as MovieContextType;
  const navigate = useNavigate();


//set state to movie id 
  useEffect(() => {
    if (id != undefined) {
      const idNumber = parseInt(id, 10);
      setmovieId(idNumber);
    }

  }, [])

  //fatch movie after id state set
  useEffect(() => {
    getApiData();

  }, [movieId]);

  // fatch the movie
  const getApiData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId.toString() + "?api_key=24bbe9c87dca0be11f2c346eb255f7ca&append_to_response=videos"


    ).then((response) => response.json());
    setmovie(response);
  }

  const HandleOrderBtn = () => {
    if (movie !== undefined) {
      const movieToAdd = {
        id: movieId,
        title: movie?.original_title,
        date: Date.now(),
      }
      AddWatched(movieToAdd);
      navigate('/Waiting');

    }

  }
  const Image = styled.img`
  height: 50%;
  width: 25%;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    width: 75%;
  }
`;

  return (

    <div className="App" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
      {/* image */}
      <div >
        <Image src={urlPrefix + movie?.poster_path} />
      </div>
      {/* title */}
      <div>
        <h2>{movie?.original_title}</h2>
      </div>
      {/* overveiw */}
      <div style={{ width: '50%', margin: '0 auto', textAlign: 'center' }}>
        {movie?.overview}
      </div>
      {/* year */}
      <div>
        <h3>{movie?.release_date}</h3>
      </div>
      {/* age restrict */}
      <div>
        {movie?.adult && <h3 style={{ color: 'red' }}>18+</h3>}
        {!movie?.adult && <h3 style={{ color: 'green' }}> not restricted</h3>}
      </div>
      {/* trailer */}
      <div style={{marginBottom:'20px'}}>
        {movie?.videos && movie?.videos.results && (
          <iframe
            className = "trailer"
            width="50%"
            height="50%"
            src={"https://www.youtube.com/embed/" + movie.videos.results[0].key}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* number of tickets */}
      <div style={{width:'50%',margin: '0 auto'}}>
      <TextField
          color='success'
          fullWidth 
          id="standard-number"
          label="Number of tickets"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          //variant="standard"
        />
      </div>
      {/* order buton */}
      <div style={{marginTop:'20px'}}>
        <Button variant="contained" color="success" size="large" onClick={HandleOrderBtn}>order now !</Button>
      </div>
    </div>
  );

}





export default BuyTicket;