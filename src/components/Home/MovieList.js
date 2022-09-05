import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function MovieList({setOpenList,activePlay}) {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    return (
        <>
          {/* <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
          </Button> */}
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>New playlist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ListGroup>
      
            {
                activePlay.map((play)=>{
                  return( 
                    <ListGroup.Item>{play} </ListGroup.Item> 
                  )
                })
            }
            </ListGroup>
                </Modal.Body>
                 
           <Modal.Footer>
              <Button variant="secondary" onClick={function(){setOpenList(false);handleClose(); 
              }}>
                Close
              </Button>
              

              </Modal.Footer> 
          </Modal>
        </>
      );
    }

export default MovieList