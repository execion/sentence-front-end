import { Button, Grid } from '@material-ui/core';
import React from 'react';


const Word = ({data, type, alternateLetter }) => {
    const [id] = React.useState(data.id);

    return(
        <Grid item xs={"auto"}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={ () => alternateLetter(id, type)}
                >
                    {data.letter}
                </Button>
        </Grid>
    );
}

export default Word;