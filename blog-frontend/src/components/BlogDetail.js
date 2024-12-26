import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error('Error fetching blog:', error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/blogs/${id}`)
      .then(() => navigate('/'))
      .catch(error => console.error('Error deleting blog:', error));
  };

  return (
    <div className="container">
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <div>
            <button onClick={() => navigate(`/edit/${blog._id}`)}>Edit</button>
            <button onClick={handleDelete} style={{ marginLeft: '10px', backgroundColor: '#f44336' }}>Delete</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BlogDetail;