import React, { useContext } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalContext';
import Book from './Book';

const Books = () => {

    const { books } = useContext(GlobalContext);
    return (
        <Container className='d-flex flex-wrap justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
            {
                books.length > 0 || <Spinner animation="border" variant="info" />
            }
            {
                books.length > 0 && (
                    books.map(book => <Book key={book._id} book={book} />)
                )
            }
        </Container>
    );
};

export default Books;