import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./TopNav.css"
import {useState} from "react";
import Example from "./Modal"
import MovieList from './MovieList';


function OffcanvasExample({handleLogout, favList, setAllPlaylists, allPlaylists}) {
 
  const [openModal, setOpenModal]=useState(false);
  const [openList, setOpenList]= useState(false);
const [activePlay, setActivePlay]=useState([])

  const openListHandler=(play)=>{
    const arr=allPlaylists.map((list)=>{
      if(list.name===play){
        return list.movies;
      }
    })
    setActivePlay(arr)
    console.log(arr)
    !openList?setOpenList(true):setOpenList(false);
  }

  const newPlaylistHandler=()=>{
    !openModal?setOpenModal(true):setOpenModal(false);

  }
  return (
    <div className='topn'>
      {['xl'].map((expand) => (
        <Navbar fixed="top" key={expand} bg="dark" expand={expand} className="mb-3 px-4 navbar-dark">
          <Container fluid>
            <Navbar.Brand href="#">MoviesDB</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  MoviesDB
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 " >
                  {/* <Nav.Link  href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link> */}
                  <NavDropdown
                    
                    title="Playlists⭐"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
   
                  {allPlaylists.map((fav)=>
                  <NavDropdown.Item onClick={()=>{openListHandler(fav.name)}}>{fav.name}</NavDropdown.Item>
                  )}
                    
                    
                    <NavDropdown.Divider style={{backgroundColor:"#16b57f"}}/>
                    <NavDropdown.Item onClick={newPlaylistHandler}>
                      Add new playlist
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
                

                <div className="d-grid gap-2">
                    <Button variant="primary"  onClick={handleLogout} style={{width:"8rem",backgroundColor:"#16b57f"}}>
                      Log out
                    </Button>
                </div>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {openModal && <Example newPlaylistHandler={newPlaylistHandler} setAllPlaylists={setAllPlaylists}/>}
            {openList&& <MovieList setOpenList={setOpenList} activePlay={activePlay}/>}
          </Container>
        </Navbar>
      ))}

      
    </div>
  );
}

export default OffcanvasExample;