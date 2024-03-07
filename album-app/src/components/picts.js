import React, { useEffect, useState } from 'react';
import api from '../services/api';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await api.get('/photos');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setPhotos([]);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h2>Photo List</h2>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;