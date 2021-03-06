import { useState } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App(){
    const apiKey = 'fef8ac0';
    
    const [ movie, setMovie ] = useState(null);

    const getMovie = async (searchTerm) => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
            const data = await response.json();
            setMovie(data);
        }catch(error){
            console.error(error)
        }
    };
    
    return(
        <div className="App">
            <Form moviesearch={getMovie} />
            <MovieDisplay movie={movie} />
        </div>
    )
};