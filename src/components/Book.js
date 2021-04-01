import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../context/GlobalContext';

const Book = ({ book }) => {
    const { _id, name, author, price, imgURL } = book;
    const { setselected } = useContext(GlobalContext);
    let history = useHistory();

    const handleBuy = id => {
        fetch(`https://apple-custard-53620.herokuapp.com/selected/${id}`)
            .then(res => res.json())
            .then(data => {
                setselected(data[0])
            })

    }
    return (
        <div className='p-3 m-3 shadow-lg book rounded'>
            <img src={imgURL} alt="book" className='bookImg' />
            <h5 className='py-1'>{name}</h5>
            <p>By <b>{author}</b></p>
            <div className="d-flex justify-content-between align-items-center p-2">
                <h5 className='text-success'>${price}</h5>
                <button className="btn btn-primary rounded rounded-pill" onClick={
                    () => {
                        handleBuy(_id)
                        history.push('/checkout')
                    }
                }>Buy now!</button>
            </div>
        </div>
    );
};

export default Book;