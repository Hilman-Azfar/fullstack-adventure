import React from "react";
import Nav from './nav';
import Search from './search';

function BasicPage(props) {
    const {children} = props;
    return (
        <>      
            <header>
                {/* Navigation */}
                <Nav/>
        
                {/* Search */}
                <Search />
                {/* Recommendations */}
                {/*Shops*/}
            </header>

            {children}
        </>
    )
}

export default BasicPage;
