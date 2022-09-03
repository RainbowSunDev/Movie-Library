import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup"
import RouteProtect from "./components/Auth/RouteProtect";
import { UserAuthContextProvider } from "./context/UserAuth";

function App() {
  return (
    <div className="App">
      {/* <Row>
        <Col> */}
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <RouteProtect>
                    <Home />
                  </RouteProtect>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        {/* </Col>
      </Row> */}
    </div>
  );
}

export default App;