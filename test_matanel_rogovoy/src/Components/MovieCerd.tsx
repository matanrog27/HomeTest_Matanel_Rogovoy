import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import LikeBtn from './LikeBtn';
import OrderBtn from './OrderBtn';
import { useContext } from 'react';
import { MovieContextType } from '../Types/MovieContextTypes';
import {MovieContext} from './MovieContext';

type MovieObjType = {movie:
    {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  sendOverView : (overview : string) => void
}
export default function MovieCard(props: MovieObjType) {
    const navigate = useNavigate();
    const urlPrefix = "https://image.tmdb.org/t/p/original"
    const { Liked } = useContext(MovieContext) as MovieContextType;
    

    const asLikedMovie = {
        id : props.movie.id,
        title: props.movie.original_title

    }
   
    //method that handle overview click and returns the overview to "Main" component
    const HandleClickOverview = ()=>{
        props.sendOverView(props.movie.overview);
    } 
    return (
      //  
        <Card sx={{ height: 525 }} >
            <CardMedia
                component="img"
                src={urlPrefix + props.movie.poster_path}
                alt="image"
                sx={{
                    paddingTop:2,
                    objectFit: 'contain',
                    height: '60%',
                    width:'100%'
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" style={{height:50}} component="div">
                    {props.movie.original_title}
                </Typography>
                <Typography variant="body2" style={{height:50,marginTop:10}} color="text.secondary" onClick={HandleClickOverview}>
                 {props.movie.overview.split(' ').slice(0, 15).join(' ')+"..."}
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent:'center'}}>
               <OrderBtn id={props.movie.id}></OrderBtn>
                <LikeBtn movie={asLikedMovie} ></LikeBtn>
            </CardActions>
        </Card>
        
    );
}