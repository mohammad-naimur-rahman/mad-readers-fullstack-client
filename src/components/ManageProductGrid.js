import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalContext';
import ProductTableRow from './ProductTableRow';

const ManageProductGrid = () => {

    const { books } = useContext(GlobalContext);
    return (
        <div className='p-3'>
            <h2>Manage section</h2>
            <Table striped bordered hover style={{ overflowX: 'scroll' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, i) => <ProductTableRow key={book._id} book={book} index={i + 1} />)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProductGrid;