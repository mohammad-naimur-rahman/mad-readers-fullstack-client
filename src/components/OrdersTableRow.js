import React from 'react';

const OrdersTableRow = ({ order, index }) => {
    const { bookName, author, price, orderDate } = order;
    return (
        <tr>
            <td>{index}</td>
            <td>{bookName}</td>
            <td>{author}</td>
            <td className='text-right'>1</td>
            <td className='text-right'>${price}</td>
            <td>{new Date(orderDate).toDateString('dd/MM/yyyy')}</td>
        </tr>
    );
};

export default OrdersTableRow;