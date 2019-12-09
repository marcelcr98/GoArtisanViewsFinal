import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Nav = (props) => {

    const {history} =props;

    return (

        <React.Fragment>
            <button
                onClick={() => history.push('/settings')}
            >
                go to settings
            </button>

            
            <ul>
                <li> <Link to="/dashboard">Dashboard</Link></li>
                <li> <Link to="/settings">Settings</Link></li>
                <li> <Link to="/reports">Reports</Link></li>
                <li> <Link to="/tiendas_p">Tiendas</Link></li>
            </ul>

            {false && <Redirect to="test"/>}
        </React.Fragment>
    );
};

export default Nav;