import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function Example({newPlaylistHandler}) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
const [newPlay, setNewPlay]=useState("")

const [allPlaylists, setAllPlaylists]=useState([]);

  const onChangePlayHandler=(event)=>{
    setNewPlay(event.target.value)
    
  }

  const onNewPlaylist=()=>{
    setNewPlay(current => [...current, newPlay]);
    
  }
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
        <Form.Group className="m-3 px-3" controlId="formBasicEmail">
        <Form.Label>Playlist name</Form.Label>
        <Form.Control type="email" placeholder="Enter name here" onChange={onChangePlayHandler}/>
        <Form.Text className="text-muted">
          Playlists are public by default.
        </Form.Text>
        <Form.Check 
        className="mt-4"
        type="switch"
        label="Make it private"
      />
        </Form.Group>
       <Modal.Footer>
          <Button variant="secondary" onClick={function(){handleClose();onNewPlaylist();}}>
            Close
          </Button>
          <Button variant="primary" style={{backgroundColor:"#16b57f"}} onClick={function(){
            newPlaylistHandler();
            onNewPlaylist();
            handleClose();
          }}>Create</Button>
          </Modal.Footer> 
      </Modal>
    </>
  );
}
export default Example;