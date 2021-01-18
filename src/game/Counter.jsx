import { Box, Grid } from '@material-ui/core';
import React from 'react'

const Counter = ({count}) => {
        return (
            <Box mx="auto" maxWidth="95%" width="30rem" textAlign="center" bgcolor="tertiary.main" color="text.primary" fontWeight={60} fontSize={18} my={3} borderRadius=".8rem">
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <p>Correct: {count.correct}</p>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <p>Incorrect: {count.incorrect}</p>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <p>Count: {count.count}</p>
                    </Grid>
                </Grid>
            </Box>
        );
    
}

export default Counter;