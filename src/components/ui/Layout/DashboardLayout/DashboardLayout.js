import React from 'react';
import Header from './Header/Header.js';

const DashboardLayout = ({ children }) => {

    return (
        <>
            <Header />
            <main className='mint-container'>
                {children}
            </main>
        </>
    );

};

export default DashboardLayout;