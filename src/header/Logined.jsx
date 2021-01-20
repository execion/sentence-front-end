import { Box, Button, Fade, isWidthDown, Menu, withWidth } from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';


const Logined = ({username, width}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null)
    }

    const logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("passport");
        window.location.reload();
    }

    if(isWidthDown("xs", width)) {
        return(
            <>
                <Button variant="text" color="primary" onClick={handleClick}>
                    <MenuIcon/>
                </Button>

                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open = {open}
                    onClose = {handleClose}
                    TransitionComponent ={Fade}
                >
                    <Box display="flex" flexDirection="column" alignItems="center" width="6rem">
                        <Button variant="text" color="primary">{`${username}`}</Button>
                        <Button variant="text" color="secondary" onClick={() => logout()}>Logout</Button> 
                    </Box>
                </Menu>
            </>
        );
    }

    

    return (
        <Box width={200} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary">{`${username}`}</Button>
            <Button variant="contained" color="secondary" onClick={() => logout()}>Logout</Button>       
        </Box>
    );
}

export default withWidth()(Logined);