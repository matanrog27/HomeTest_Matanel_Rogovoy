import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MovieCard from '../Components/MovieCerd';
import  '../style/MainPagestyle.css';
import Grid from '@mui/material/Grid'
import { Container } from 'react-bootstrap';
import { MovieContextType } from '../Types/MovieContextTypes';
import { MovieContext } from '../Components/MovieContext';
import { idText } from 'typescript';
import { Movie, TurnedIn } from '@mui/icons-material';


function Main() {
    type MovieType = {
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

    type reultsType = {
        page: number;
        results: MovieType[];
        total_pages: number;
        total_results: number;
    }

    const [movies, setmovies] = useState<MovieType[]>([]); //ho;d the movies on current page
    const [page, setpage] = useState<number>(1) // cuent page number
    const [scrolledToBottom, setScrolledToBottom] = useState(false); // did I scrolled to the bottom
    const [overviewToShow, setoverviewToShow] = useState("");
    const [showModal, setshowModal] = useState(false)



    // get the movies for the current page
    const getApiData = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=24bbe9c87dca0be11f2c346eb255f7ca&page=" + page.toString()


        ).then((response) => response.json());

        // update the state
        let newMovies = [...movies, ...response.results]
        setmovies(newMovies);
    };

    // inialize 
    useEffect(() => {
        getApiData();
        const handleScrollBottom = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop + windowHeight >= documentHeight) {
                console.log("im at bottom");
                setScrolledToBottom(true);
            }
        };

        window.addEventListener('scroll', handleScrollBottom);


        return () => {
            window.removeEventListener('scroll', handleScrollBottom);

        };
    }, [])


    useEffect(() => {
        if (scrolledToBottom === true && page < 500) {
            setpage(prevPage => prevPage + 1)
            setScrolledToBottom(false);
            //ScrollToTop()
        }

    }, [scrolledToBottom])

    useEffect(() => {
        getApiData();
    }, [page]);

    // just to log the movies
    useEffect(() => {
        console.log('page', page);
        console.log('movies', movies);

    }, [movies]);


    const HandleModal = (overview: string) => {
        setoverviewToShow(overview);
        ToggleModal();
    }

    const ToggleModal = ()=>{
        setshowModal(!showModal);
    } 

    return (
        <Container className='container' style={{ margin: 10 }}>


            <Grid container className='CardContainer' spacing={2} style={{ justifyContent: 'center', alignItems: 'center' }}>
                {movies === null ? <h2>movies</h2> : movies.map((movie) => (
                    <Grid item xs={12} md={3}>
                        <MovieCard movie={movie} sendOverView={HandleModal} />
                    </Grid>

                ))}
            </Grid>
            {showModal && 
            <div>
                {/* modal */}
                <div className='modal'>
                    {overviewToShow}
                </div>
                {/* overlay */}
                <div className='overlay' onClick={ToggleModal}></div>
            </div>
            }
        </Container>
           

    );
    
}

export default Main;