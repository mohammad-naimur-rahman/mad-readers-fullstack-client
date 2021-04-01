import React, { createContext, useEffect, useState } from 'react';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {

    const [books, setbooks] = useState({});
    const [loggedInUser, setloggedInUser] = useState({});
    const [selected, setselected] = useState({});
    const [orders, setorders] = useState([]);

    useEffect(() => {
        fetch('https://apple-custard-53620.herokuapp.com/allBooks')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setbooks(data)
                }
            })
            .catch(err => console.log(err));
    }, [])

    const loadBooks = () => {
        fetch('https://apple-custard-53620.herokuapp.com/allBooks')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setbooks(data)
                }
            })
            .catch(err => console.log(err));
    }

    const loadOrders = () => {
        if (loggedInUser.email) {
            fetch(`https://apple-custard-53620.herokuapp.com/orders/?email=${loggedInUser.email}`)
                .then(res => res.json())
                .then(data => {
                    setorders(data);
                })
        }
    }

    useEffect(() => {
        if (loggedInUser.email) {
            fetch(`https://apple-custard-53620.herokuapp.com/orders/?email=${loggedInUser.email}`)
                .then(res => res.json())
                .then(data => {
                    setorders(data);
                })
        }
    }, [loggedInUser.email])
    return (
        <GlobalContext.Provider value={{ books, loggedInUser, setloggedInUser, selected, setselected, orders, setorders, loadBooks, loadOrders }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalProvider, GlobalContext };