import React from "react";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Container>
          <h1>Welscome to django series react rdx</h1>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
