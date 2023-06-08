
import { IconButton } from '@mui/material';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { MovieContext } from '../Components/MovieContext';
import { WatchedMovie, LikedMovie, MovieContextType } from '../Types/MovieContextTypes';

type proptype ={
    movie : LikedMovie,
    //isliked : boolean
}
export default function MovieCard(props :proptype ) {
    const { Liked } = useContext(MovieContext) as MovieContextType;
    // check if movie id is in liked list
    const CheckLiked = (idToCheck : number) =>{
        for (let item of Liked)
        {
            if(item.id === idToCheck)
            {
                return true;
            }
        }
        return false;
    }
    const [like, setlike] = useState(CheckLiked(props.movie.id));
    const { AddLiked, RemoveLiked ,watched} = useContext(MovieContext) as MovieContextType;
   

    const HandleLike = ()=>{
        setlike(true);
        AddLiked(props.movie);
    }

    const HandleUnlike = ()=>{
        setlike(false);
        RemoveLiked(props.movie.id);
    }

    return (
        <div>
            {like &&
                <IconButton aria-label="delete" onClick={HandleUnlike} style={styles.fav}>
                    <FavoriteOutlined />
                </IconButton>
            }
            {!like &&
                <IconButton aria-label="delete" onClick={HandleLike} style={styles.fav}>
                    <FavoriteBorderOutlined />
                </IconButton>
            }
        </div>

    );
}
const styles = {
    fav: {
      color: 'red'
    }
  };