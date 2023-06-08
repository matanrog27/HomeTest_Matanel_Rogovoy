
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../Components/MovieContext';
import { WatchedMovie, LikedMovie, MovieContextType } from '../Types/MovieContextTypes';

type proptype = {
    id: number
}
export default function Waitingpage() {
    const navigate = useNavigate()

    const navigatetohome = () => {
        navigate('/');
    }

    useEffect(() => {
        setTimeout(navigatetohome, 10000);
    }, [])

    return (
        <div>
            <h5>Thank you , Enjoy your Movie</h5>
        </div>

    );
}
