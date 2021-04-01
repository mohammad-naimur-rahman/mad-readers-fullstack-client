import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalContext';
import OrdersTableRow from './OrdersTableRow';

const Orders = () => {

    const { orders } = useContext(GlobalContext);
    return (
        <div>
            <h2 className='m-3 text-primary'>Your orders</h2>
            <Table striped bordered hover style={{ maxWidth: '1000px' }} className='mx-auto p-4'>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Date of order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, i) => <OrdersTableRow key={order._id} order={order} index={i + 1} />)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Orders;