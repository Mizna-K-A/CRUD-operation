import React, { useState } from 'react';
import bgimage from '../assets/shelfspace-bg.png';
import { Link } from 'react-router-dom';
import { uploadBookAPI } from '../services/allAPI';

const Home = () => {
  const [book, setBook] = useState({
    name: '',
    author: '',
    imageLink: '',
    purchaseLink: ''
  });

  const handleSubmit = async () => {
    const { name, author, imageLink, purchaseLink } = book;
  
    // Check if all fields are filled
    if (name && author && imageLink && purchaseLink) {
      try {
        const result = await uploadBookAPI(book);
        
        // If API call was successful
        if (result.status >= 200 && result.status < 300) {
          alert('Added to your collection!!!');
          setBook({ name: '', author: '', imageLink: '', purchaseLink: '' }); // Reset form
        } else {
          alert('Failed to add book. Please try again.');
        }
      } catch (error) {
        console.error('Error adding book:', error);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert("Please fill the form completely");
    }
  };
  

  return (
    <>
      <div 
        className='d-flex flex-column justify-content-center align-items-center m-5' 
        style={{
          backgroundImage: `url(${bgimage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '100vh'
        }}
      >
        <h1 style={{ color: 'purple' }}>Add Books</h1>

        <input 
          value={book.name}
          onChange={e => setBook({ ...book, name: e.target.value })} 
          className='form-control w-50 m-3' 
          type='text' 
          placeholder='Book Name' 
        />
        <input 
          value={book.author}
          onChange={e => setBook({ ...book, author: e.target.value })} 
          className='form-control w-50 m-3' 
          type='text' 
          placeholder='Author' 
        />
        <input 
          value={book.imageLink}
          onChange={e => setBook({ ...book, imageLink: e.target.value })} 
          className='form-control w-50 m-3' 
          type='text' 
          placeholder='Image Link' 
        />
        <input 
          value={book.purchaseLink}
          onChange={e => setBook({ ...book, purchaseLink: e.target.value })} 
          className='form-control w-50 m-3' 
          type='text' 
          placeholder='Purchase Link' 
        />

        <button onClick={handleSubmit} className='btn btn-success'>Submit</button>

        <Link to={'/book'} className='btn btn-danger mt-3'>
          <i className="fa-solid fa-book"></i> Show Books
        </Link>
      </div>
    </>
  );
};

export default Home;
