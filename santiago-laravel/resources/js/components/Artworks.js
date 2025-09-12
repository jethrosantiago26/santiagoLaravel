import React, { useState } from 'react';
import axios from 'axios';

export default function Artworks() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      if (image) formData.append('image', image);
      await axios.post('/api/artworks', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setTitle('');
      setDescription('');
      setImage(null);
      setSuccess('Artwork uploaded successfully!');
    } catch (err) {
        if (err.response) {
    console.error("Full error response:", err.response.data);
    if (err.response.data.errors) {
      console.error("Validation errors:", err.response.data.errors);
      setError(JSON.stringify(err.response.data.errors, null, 2));
    } else {
      setError(err.response.data.message || "Upload failed");
    }
  } else {
    console.error(err);
    setError("Upload failed. Please try again.");
  }
    }
  };

  return (
    <div className="container">
      <h1>Artworks</h1>
      {success && <div style={{ color: 'green', marginBottom: '1rem' }}>{success}</div>}
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', width: '100%' }}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Artwork Title"
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files[0])}
          style={{ marginBottom: '1rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1.5rem', background: '#3182ce', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600' }}>
          Add Artwork
        </button>
      </form>
    </div>
  );
}
