import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await api.get('/albums');
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
        setAlbums([]);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div>
      <h2>Album List</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;