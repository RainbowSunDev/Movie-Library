import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function Example({newPlaylistHandler, setAllPlaylists}) {
  const [show, setShow] = useState(true);
  
  const handleClose = () => setShow(false);
const [newPlay, setNewPlay]=useState("")


const [privacy, setprivacy]=useState({status:false});
  const setPrivacyHandler=(event)=>{
    
    setprivacy({ ...privacy, [event.target.name]: event.target.checked });

  }

  const onChangePlayHandler=(event)=>{
    setNewPlay(event.target.value)
    
  }

  const onNewPlaylist=(obj)=>{
    
    setAllPlaylists(current => [...current, obj]);
    
    
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
        <Form.Control placeholder="Enter name here" onChange={onChangePlayHandler}/>
        <Form.Text className="text-muted">
          Playlists are public by default.
        </Form.Text>
        <Form.Check 
        className="mt-4"
        type="switch"
        label="Make it private"
        name="status"
        checked={privacy.status}
        onChange={setPrivacyHandler}
      />
        </Form.Group>
       <Modal.Footer>
          <Button variant="secondary" onClick={function(){newPlaylistHandler(); handleClose();}}>
            Close
          </Button>
          <Button variant="primary" style={{backgroundColor:"#16b57f"}} onClick={function(){
            newPlaylistHandler();
            onNewPlaylist({name:newPlay, pub:privacy.status, movies:[""]});
            handleClose();
          }}>Create</Button>
          </Modal.Footer> 
      </Modal>
    </>
  );
}
export default Example;