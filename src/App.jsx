import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/MainContent/MainContent.css";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <MainContent />
                <Footer />
              </div>
            }
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route
            path="/error/:errorCode?"
            element={
              <div>
                <Header />
                <h1 className="posts">404 Not Found</h1>
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
