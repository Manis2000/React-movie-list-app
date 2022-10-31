
import './App.css';

import {Container, } from "react-bootstrap";
import { Title,  } from './components/Title';
import { SearchForm} from './components/SearchForm';
import {MovieList} from './components/MovieList';
import { useState } from 'react';




function App() {

  const [movieList, setMovieList] = useState([]);

  const addMovie = movie =>{
    setMovieList([...movieList, movie]);

  }
  return (
    <div className='wrapper'>
      <Container>  
      <Title/>
      <SearchForm func= {addMovie} />
      <MovieList/> 
      
      </Container>


</div>
  );
}

export default App;
