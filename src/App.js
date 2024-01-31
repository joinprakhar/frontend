import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";

import Modal from "./Component/Small Components/Modal";
import MinorProject from "./Component/Small Components/MinorProject";
import ProjectDetailModal from "./Component/Small Components/ProjectDetailModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <Navbar />
      {/* <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ProjectDetailModal />
      </Modal> */}
    </div>
  );
}

export default App;
