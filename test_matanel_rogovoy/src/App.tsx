import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main';
import BuyTicket from './Pages/BuyTicket';
//import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MovieContextProvider from './Components/MovieContext';
import Lists from './Pages/Lists';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Waitingpage from './Components/WaitingPage';


function App() {
  return (
    <div className="App" style={{display:'flex',flexDirection:'column',paddingBottom:110}}>
      <Header></Header>

      <MovieContextProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/BuyTicket/:movieId" element={<BuyTicket />} />
          <Route path="/Lists" element={<Lists />} />
          <Route path="/Waiting" element={<Waitingpage />} />
        </Routes>
      </MovieContextProvider>

      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <Footer></Footer>
      </div>
    </div >

  );
}

export default App;
