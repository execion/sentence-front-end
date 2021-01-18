import { Box, Button } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

const NoLogined = () => {
    return (
        <Box width={200} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" component={Link} to="/">Login</Button>
            <Button variant="contained" color="secondary" component={Link} to="/signup">Sign-up</Button>
        </Box>
    );
}

export default NoLogined;