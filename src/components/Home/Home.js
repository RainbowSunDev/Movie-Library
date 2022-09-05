import axios from "axios";
import React, { useState } from "react";
import { Button, Navbar, Card, Dropdown, DropdownButton } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import OffcanvasExample from "./TopNav";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuth";
import "./Home.css"
// import Carousal from "./Carousal";
const Home = () => {
const [search, setSearch]= useState(); //keyword searched
  const [movies, setMovies]= useState([]); //response 
const [favList, setFavList]=useState([]);
const [allPlaylists, setAllPlaylists]=useState([{name:"Favorites", pub:true, movies:["Placeholder "]}]);
  const addFavHandler=(event)=>{
    setFavList((current => [...current, event.target.id]))
    //console.log(favList)
  }

  const fetchMovieHandler=(event)=>{
    event.preventDefault();
    axios.get(`http://www.omdbapi.com/?s=${search}&apikey=d3bfd27a`)
    .then((response)=>{
      // console.log(response.data.Search);
      setMovies(response.data.Search)
     // console.log(movies)
    });
  }

  const onChangeHandler=(event)=>{
    setSearch(event.target.value)
  }

  
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const setNewMovieHandler=(curplay, val)=>{
    
    setAllPlaylists(current =>
      current.map(obj => {
       //console.log(obj.name)
        if (obj.name === curplay) {
          //console.log(event)
          const newMovieAddition= obj.movies.concat(val)
          
          return {...obj, movies:newMovieAddition };
        }

        return obj;
      }),
    );
    console.log(allPlaylists)
    
  }

  return (
    <div className="home">
   
     {/* <Button onClick={fetchMovie}>Fetch!</Button> */}
    <OffcanvasExample handleLogout={handleLogout} setAllPlaylists={setAllPlaylists} allPlaylists={allPlaylists} favList={favList}/>
    <div className="searchBar">
    <div className="background"/>
    <h1 style={{color:"white", marginBottom:"2rem"}}>Search movies and more!</h1>
     <Form className="d-flex">
      <Form.Control type="search" placeholder="Search" onChange={onChangeHandler} className="me-3 bg-dark" style={{color:"#fff"}} aria-label="Search"/>
        <Button  style={{backgroundColor:"#ff6711", color:"white", border:"none"}} onClick={fetchMovieHandler}>Search</Button>
      </Form>
      </div>
    {/* <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout} style={{width:"8rem"}}>
          Log out
        </Button>
    </div> */}
    <div className="container">
  <div className="row">
   {movies.map((value, index)=>{
      return(
        <div className="col-3 my-3">
      <Card style={{backgroundColor:"#3d3d58"}}>
        <Card.Img variant="top" src={value.Poster} />
        <Card.Body style={{backgroundColor:"#3d3d58", border:"0px"}}>
       
          <Card.Text>
          <h4 style={{color:"#fafafa"}}>
            {value.Title}-{value.Year}</h4>
          </Card.Text>

          <div className="buttonCard">
          <Button id={value.Title} style={{backgroundColor:"#16b57f", color:"black"}} onClick={function(){setNewMovieHandler('Favourites', value.Title);}}>Add to⭐</Button>

          <DropdownButton id="dropdown-basic-button" title="">
          {allPlaylists.map((fav)=>
            <Dropdown.Item id={value.Title} onClick={function(){setNewMovieHandler(fav.name, value.Title);}}>{fav.name}</Dropdown.Item>
                  )}
            {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </DropdownButton>
          </div>
        </Card.Body>
      </Card>
        
     </div>
      );
     })} 
  
</div>
     </div>
     {/* <Carousal slides={["../Auth/fasal.png"]}/> */}
  </div> 

     

   
  );
};

export default Home;