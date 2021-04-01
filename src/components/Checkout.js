import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { GlobalContext } from '../context/GlobalContext';

const Checkout = () => {

    const { selected, loggedInUser, loadOrders } = useContext(GlobalContext);
    const { name, author, price } = selected;
    const history = useHistory();

    const handleCheckout = () => {
        const orderInfo = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            bookName: name,
            author: author,
            price: price,
            orderDate: new Date()
        }
        const url = `https://apple-custard-53620.herokuapp.com/checkOut`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
            .then(res => {
                if (res) {
                    loadOrders();
                    history.push('/orders');
                }
            })
    }

    return (
        <div className='container'>
            <div style={{ maxWidth: '1000px' }} className='mx-auto'>
                <h2 className='p-3 text-primary'>Checkout</h2>
                <Table striped bordered hover className='mx-auto'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Book Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{name} by {author}</td>
                            <td>1</td>
                            <td>${price}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="text-right">
                    <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;