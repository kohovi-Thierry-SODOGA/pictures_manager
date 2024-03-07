import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const AlbumDetails = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState({});
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const [albumResponse, photosResponse] = await Promise.all([
          api.get(`/albums/${albumId}`),
          api.get(`/photos?albumId=${albumId}`),
        ]);

        setAlbum(albumResponse.data);
        setPhotos(photosResponse.data);
      } catch (error) {
        console.error('error while fecthing album detail', error);
        setAlbum({});
        setPhotos([]);
      }
    };

    fetchAlbumDetails();
  }, [albumId]);

  return (
    <div>
      <h2>{album.title || 'Album Details'}</h2>
      <p>{album.title}</p>
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

export default AlbumDetails;