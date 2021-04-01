import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const ProductTableRow = ({ book, index }) => {
    const { _id, name, author, price } = book;
    const { loadBooks } = useContext(GlobalContext);

    const buttonStyle = {
        border: 'none',
        background: 'transparent',
        outline: 'none'
    }

    const handleDelete = id => {
        fetch(`https://apple-custard-53620.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    loadBooks();
                    alert('One item deleted');
                }
            })
    }
    return (
        <tr>
            <td>{index}</td>
            <td>{name}</td>
            <td>{author}</td>
            <td>${price}</td>
            <td className='d-flex justify-content-around'>
                <button style={buttonStyle}>
                    <FontAwesomeIcon icon={faEdit} className='text-success' />
                </button>
                <button style={buttonStyle} onClick={
                    () => handleDelete(_id)
                }>
                    <FontAwesomeIcon icon={faTrashAlt} className='text-danger' />
                </button>
            </td>
        </tr>
    );
};

export default ProductTableRow;