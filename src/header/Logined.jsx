import { Box, Button } from '@material-ui/core';
import React from 'react';


const Logined = ({username}) => {

    const Logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("passport");
        window.location.reload();
    }

    return (
        <Box width={200} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary">{`${username}`}</Button>
            <Button variant="contained" color="secondary" onClick={() => Logout()}>Logout</Button>       
        </Box>
    );
}

export default Logined;