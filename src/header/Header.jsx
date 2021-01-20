import { Grid, Box } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import Logined from './Logined';
import NoLogined from './NoLogined';

const Header = ({logined, username}) => {
    return (
        <Box bgcolor="primary.dark" height="8rem">
            <Grid container direction="row" justify="center">
                <Grid item xs={7} md={9} lg={10}>
                    <Box display="flex" alignItems="center" height="8rem" ml={10} fontSize={40} fontWeight="bold" color="text.primary">
                        <p>
                            ENGSyS
                        </p>
                    </Box>
                </Grid>

                <Grid item xs={5} md={3} lg={2}>
                    <Box display="flex" alignItems="center" height="8rem" justifyContent="center">
                        {
                            logined? <Logined username={username}/> : <NoLogined />
                        }
                    </Box>
                </Grid>           
            </Grid>
        </Box>
    );
}

const mapStateToProps = ({loginState}) => {
    return {
        logined: loginState.loading,
        username: loginState.username
    }
}
export default connect(mapStateToProps, undefined)(Header);