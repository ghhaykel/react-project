import React from 'react';
import {Link} from 'react-router-dom';
import { NavbarMain, Anchor, Logo, LogoText, ListNav, ListItem} from './style.js';

const Navbar = () => {
   
        return (
            
            <NavbarMain>
                
                <div className="container">
                    
                    <Logo>
                        <LogoText>Ultra Profile</LogoText> 
                    </Logo>
                               
                    <ListNav>
                        <ListItem><Link to="/">Home</Link></ListItem>
                        <ListItem><Anchor href="#">Work</Anchor></ListItem>
                        <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                        <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                        <ListItem><Anchor href="#">About</Anchor></ListItem>
                        <ListItem><Link to="/contact">Contact</Link></ListItem>
                    </ListNav>
                    
                </div>
                
            </NavbarMain>
        );
    
}

export default Navbar;