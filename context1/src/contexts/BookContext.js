import React, {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books] = useState([
        {title: 'name of the wind'},
        {title: 'the wa of kings'},
        {title: 'the final empire'},
        {title: 'the hero of ages'}
    ]);

    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;

