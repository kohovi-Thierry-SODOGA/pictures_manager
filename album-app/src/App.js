import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlbumList from './components/album';
import AlbumDetails from './components/album_info';
import PhotoList from './components/picts';

function App() {
  return (
    <Router>
      <Routes>  {}
        <Route path="/" element={<AlbumList />} />
        <Route path="/albums/:albumId" element={<AlbumDetails />} />
        <Route path="/photos" element={<PhotoList />} />
      </Routes>
    </Router>
  );
}

export default App;