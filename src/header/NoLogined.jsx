import { Box, Button, Fade, isWidthDown, Menu, MenuItem, withWidth } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NoLogined = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null)
    }
    if(isWidthDown("xs", props.width)) {
        return (
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
                    TransitionComponent ={ Fade }
                >
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <MenuItem>
                            <Button variant="text" color="primary" component={Link} to="/">Login</Button>
                        </MenuItem>
                        <MenuItem>
                            <Button variant="text" color="primary" component={Link} to="/signup">Sign-up</Button>
                        </MenuItem>
                    </Box>
                </Menu>
            </>
        );
    } else {
        return (
            <Box width={200} display="flex" justifyContent="space-between">
                <Button variant="contained" color="primary" component={Link} to="/">Login</Button>
                <Button variant="contained" color="secondary" component={Link} to="/signup">Sign-up</Button>
            </Box>
        );
    }
}

export default withWidth()(NoLogined);