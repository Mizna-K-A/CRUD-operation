import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBookAPI, deleteBookAPI } from '../services/allAPI'; // Import deleteBookAPI

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getBook();
  }, []); 

  const getBook = async () => {
    try {
      const result = await getBookAPI();

      if (result.status >= 200 && result.status < 300) {
        setAllBooks(result.data); // Assuming result.data is an array of books
      } else {
        console.error("Failed to fetch books:", result);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Delete Book Function
  const handleDelete = async (bookId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    
    if (confirmDelete) {
      try {
        const result = await deleteBookAPI(bookId);

        if (result.status >= 200 && result.status < 300) {
          // If delete was successful, remove the book from the state
          setAllBooks(allBooks.filter((book) => book.id !== bookId));
          alert("Book deleted successfully!");
        } else {
          alert("Failed to delete book. Please try again.");
        }
      } catch (error) {
        console.error('Error deleting book:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <div className="w-100 float-right m-3">
        <Link to={'/home'} className="fs-4">
          <i className="fa-solid fa-house"></i>
        </Link>
      </div>
      <div className="m-5">
        <div className="row d-flex justify-content-center align-items-center">
          {/* If there are no books, display a message */}
          {allBooks.length === 0 ? (
            <div className="col-12">
              <h2 className="text-center text-danger">There is no book to display!!!</h2>
            </div>
          ) : (
            allBooks?.map((book) => (
              <div key={book?.id} className="col-3 m-5" style={{width:'255px',height:'305px'}}>
                <h4>{book?.name}</h4>
                <h6>{book?.author}</h6>
                <img
                  width={'250px'}
                  height={'300px'}
                  src={book?.imageLink || 'https://via.placeholder.com/250x300'}
                  alt={book?.name}
                />{' '}
                <br />
                <a className="me-5 mt-3" href={book?.purchaseLink} target="_blank" rel="noopener noreferrer">
                  Link To Purchase
                </a>
                <span
                  className="ms-4 mt-3 text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDelete(book.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Books;
