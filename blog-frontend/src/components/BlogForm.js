import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function BlogForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/blogs/${id}`)
        .then(response => {
          setTitle(response.data.title);
          setContent(response.data.content);
        })
        .catch(error => console.error('Error fetching blog:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content };

    if (id) {
      axios.put(`http://localhost:5000/api/blogs/${id}`, blog)
        .then(() => navigate('/'))
        .catch(error => console.error('Error updating blog:', error));
    } else {
      axios.post('http://localhost:5000/api/blogs', blog)
        .then(() => navigate('/'))
        .catch(error => console.error('Error creating blog:', error));
    }
  };

  return (
    <div className="container">
      <h1>{id ? 'Edit Blog' : 'Create Blog'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;