import axios from './axios'
import React,{useState,useEffect} from 'react'
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';
import "./Row.css";

const base_url =  "https://image.tmdb.org/t/p/original/";

export default function Row({title,fetchURL,isLargeRow}) {
    const [movies,setMovies]= useState([]);
    const [trailerURL,setTrailerURL] = useState('')

    useEffect(()=>{
       
        async function fetchData(){
            const request = await axios.get(fetchURL);
             setMovies(request.data.results)
             return request;
        }
        fetchData();
    },[fetchURL])

    
   const opts={
       height:'360',
       width:'100%',
       playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
   }

   const handleClick=(movie)=>{
       if(trailerURL){
           setTrailerURL("")
       }else{
           movieTrailer(movie?.name || "").then(url=>{
               const urlParams = new URLSearchParams(new URL(url).search);
               setTrailerURL(urlParams.get('v')) 

           }).catch(error=>console.log(error))
       }

   }

    return (
        <div className='row' >
            <h2>{title} </h2>
          
            <div className='row__posters' >
                {/*  severals  ->row- poster(s)*/}

                {
                    movies.map(movie=>(
                        
                        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id} src={ `${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} 
                         alt={movie.name} 
                         onClick ={()=> handleClick(movie)} />
                    ))
                }
                

            </div>
            {trailerURL &&  <Youtube videoId={trailerURL} opts={opts} /> }
           
        </div>
    )
}


