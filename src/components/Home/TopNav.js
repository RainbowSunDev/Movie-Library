import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./TopNav.css"
import {useState} from "react";
import Example from "./Modal"


function OffcanvasExample({handleLogout, favList}) {

  const [openModal, setOpenModal]=useState(false);
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
                    
                    title="Favourites⭐"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
   
                  {favList.map((fav)=>
                  <NavDropdown.Item >{fav}</NavDropdown.Item>
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
            {openModal && <Example newPlaylistHandler={newPlaylistHandler}/>}
          </Container>
        </Navbar>
      ))}

      
    </div>
  );
}

export default OffcanvasExample;