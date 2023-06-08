import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { WatchedMovie, LikedMovie, MovieContextType } from '../Types/MovieContextTypes';
import { type } from 'os';

type props ={
    children : ReactNode;
}
export const MovieContext = createContext<MovieContextType | null>(null);

const MovieContextProvider: React.FC<props> = ({ children }) => {
  const [watched, setWatched] = useState<WatchedMovie[]>([]);
  const [liked, setLiked] = useState<LikedMovie[]>([]);

  //add movie to watched
  const addWatched = (movie: WatchedMovie) => {
    let prevWatched = [...watched];
    prevWatched.push(movie);
    setWatched(prevWatched);
  };

// add liked movie
  const addLiked = (movie: LikedMovie) => {
    let prevLiked = [...liked]
    prevLiked.push(movie);
    setLiked(prevLiked);
  };

  // remove movie from liked
  const removeLiked = (id: number) => {
    setLiked((prevLiked) => prevLiked.filter((movie) => movie.id !== id));
  };

  const contextValue: MovieContextType = {
    watched: watched,
    Liked: liked,
    AddWatched: addWatched,
    AddLiked: addLiked,
    RemoveLiked: removeLiked,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
