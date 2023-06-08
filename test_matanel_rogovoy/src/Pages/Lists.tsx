
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { MovieContext } from '../Components/MovieContext';
import { WatchedMovie, LikedMovie, MovieContextType } from '../Types/MovieContextTypes';
import React from 'react';
import OrderBtn from '../Components/OrderBtn';
import LikeBtn from '../Components/LikeBtn';
import { Row } from 'react-bootstrap';

type proptype ={
    liked : LikedMovie
}
export default function Lists() {

    const [like, setlike] = useState(false)
    const { AddLiked, RemoveLiked ,watched , Liked} = useContext(MovieContext) as MovieContextType;
    const [watchedList, setwatchedList] = useState(watched);
    const [likedList, setlikedList] = useState(Liked)
    
    // format the date
    const formatDate = (timestamp : number) => {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
      };
    return (
<div style={{ width: '75%', margin: '0 auto' }}>
  <div>
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <h2>WATCHED</h2>
    </div>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    </List>
    {watched.map(item => (
      <>
        <ListItem alignItems="flex-start" style={{ borderBottom: '1px solid gray', textAlign: 'center' }}>
          <ListItemText
            primary={item.title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {formatDate(item.date)}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </>
    ))}
  </div>

  <div>
    <div>
      <h2>LIKED</h2>
    </div>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    </List>
    {Liked.map(item => (
      <>
        <ListItem alignItems="flex-start" style={{ borderBottom: '1px solid gray', textAlign: 'center' }}>
          <ListItemText
            primary={item.title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <div style={{ marginRight: '10px' }}>
                    <OrderBtn id={item.id}></OrderBtn>
                  </div>
                  <LikeBtn movie={item}></LikeBtn>
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </>
    ))}
  </div>
</div>

      );
      
}
const styles = {
    fav: {
      color: 'red'
    }
  };