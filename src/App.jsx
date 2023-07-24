import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchForm from "./components/SearchForm.jsx";
import UserDetails from "./components/UserDetails.jsx";
import SearchResults from "./components/SearchResult.jsx";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <Router>
      <Header />
        <SearchForm />
        <Routes>
          <Route path="/user/:username" element={<UserDetails />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
    </Router>
  );
}

export default App;
