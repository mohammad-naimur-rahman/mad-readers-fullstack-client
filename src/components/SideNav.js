import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faPlus } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
    const location = useLocation();
    return (
        <div className='side-nav bg-primary d-flex flex-column'>
            <Link to='/manageProduct' className={location.pathname === '/manageProduct' ? 'bg-info' : 'bg-primary'}><FontAwesomeIcon icon={faThLarge} /> Manage product</Link>
            <Link to='/addProduct' className={location.pathname === '/addProduct' ? 'bg-info' : 'bg-primary'}><FontAwesomeIcon icon={faPlus} /> Add product</Link>
        </div>
    );
};

export default SideNav;