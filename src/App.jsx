// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";

// Importing components and utils
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./app.css";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <div className="outer-container">
        <Header />
        <div className="page">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;