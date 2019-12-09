import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const Nav = (props) => {

    const {history} =props;

    return (

        <React.Fragment>


            
            <ul>
                <li> <Link to="/dashboard">Dashboard</Link></li>
                <li> <Link to="/settings">Settings</Link></li>
                <li> <Link to="/reports">Reports</Link></li>
                <li> <Link to="/tienda_p">Tiendas</Link></li>
            </ul>

            {false && <Redirect to="test"/>}
        </React.Fragment>
    );
};

export default Nav;