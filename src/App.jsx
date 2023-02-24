import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/MainContent/MainContent.css";

import Error from "./pages/Error/Error";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { BlogPostProvider } from "./contexts/BlogPostContext";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <BlogPostProvider>
                  <Header />
                  <MainContent />
                  <Footer />
                </BlogPostProvider>
              </div>
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/error/:errorCode?" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
