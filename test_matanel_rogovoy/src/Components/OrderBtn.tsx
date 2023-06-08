
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { MovieContext } from '../Components/MovieContext';
import { WatchedMovie, LikedMovie, MovieContextType } from '../Types/MovieContextTypes';

type proptype ={
    id : number
}
export default function MovieCard(props :proptype ) {
    const navigate = useNavigate()

    //method to redirect to waiting page
    const HandleBuyTicket = ()=>{
        navigate('/BuyTicket/'+props.id.toString());
    }

    return (
        <div>
       <Button variant="outlined" onClick={HandleBuyTicket}>order now!</Button>
        </div>

    );
}
