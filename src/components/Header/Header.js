import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Button, NavItem, Navbar } from 'react-bootstrap';
import ToggleTheme from '../ui/ToggleTheme';
import { AuthenticationContext } from "../services/authentication/authentication.context";
import { useContext } from 'react';
import { useNavigate } from "react-router";

const Header = () => {

    const { user, handleLogout } = useContext(AuthenticationContext);

    const navigation = useNavigate();
    
    const userName = user.email.split("@")[0];

    const onLogoutHandler = () => {
        handleLogout();
        navigation("/login");
      };

    return (
        <div className='header'>
            <Navbar className="navar bg-secondary">
                <div className="container-fluid">
                <NavItem> <h4 className=" text-light text-left m-3" >Hola {userName} !</h4> </NavItem>

                <div className="d-flex justify-content-end">
                <NavItem> <ToggleTheme/> </NavItem>
                <Button className="ms-4 h-25" variant="primary" onClick={onLogoutHandler}> Cerrar Sesión</Button>
                </div>
                </div>
            </Navbar>
            
        </div>
    );
};

export default Header;
